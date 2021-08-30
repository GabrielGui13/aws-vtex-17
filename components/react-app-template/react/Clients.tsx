import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { Layout, PageBlock, Table, Tag } from 'vtex.styleguide'
import Swal from 'sweetalert2';

type UserType = {
    nome: string;
    email: string;
    telefone: string;
    tipo: string;
    data_criacao: string;
    data_atualizacao: string;
}

const Clients = () => {
    const endpoint = 'https://gabrielvtex--hiringcoders202117.myvtex.com/leads'
    const [users, setUsers] = useState<UserType[]>([])
    const [allClients, setAllClients] = useState(0)
    const [allProspects, setAllProspects] = useState(0)

    useEffect(() => {
        let qtdClients = 0
        let qtdProspects = 0

        async function getClients() {
            const res = await axios.get(endpoint)
            setUsers(res.data)

            const { data } = res

            data.map((user: any) => {
                if (user.tipo == 'Cliente') qtdClients++
                else if (user.tipo == 'Prospecto') qtdProspects++
            })

            setAllClients(qtdClients)
            setAllProspects(qtdProspects)
        }
        getClients()
    }, [])

    const defaultSchema = {
        properties: {
            nome: {
                title: 'Nome',
                width: 130
            },
            email: {
                title: 'Email',
                minWidth: 300
            },
            tipo: {
                title: 'Tipo',
                width: 130,
                cellRenderer: ({ cellData }: any) => {
                    let color = ''

                    if (cellData == 'Prospecto') {
                        color = "#06004a"
                    }
                    else if (cellData == 'Cliente') {
                        color = "#ff7b00"
                    }
                    else color = "#6e6e6e"

                    return (
                        <Tag bgColor={color} color="#fff">
                            <span>{cellData}</span>
                        </Tag>
                    )
                }
            },
            data_criacao: {
                title: 'Data Criação',
                width: 130,
            },
            data_atualizacao: {
                title: 'Data Atualização',
                width: 130
            },
        },
    }

    const lineActions = [
        {
            label: ({ rowData }: any) => `Apagar ${rowData.tipo.toLowerCase()} ${rowData.nome} `,
            isDangerous: true,
            onClick: async ({ rowData }: any) => {

                async function deleteClient() {
                    await axios.delete(`https://gabrielvtex--hiringcoders202117.myvtex.com/leads/${rowData.email}`).then(() => {
                            Swal.fire({
                                title: `Deletado!`,
                                text: `O ${rowData.tipo.toLowerCase()} ${rowData.nome} foi excluido com sucesso!`,
                                icon: 'success',
                                backdrop: `rgba(0,0,0,0.05)`
                            })
                    })
                }

                Swal.fire({
                    title: `Deletar ${rowData.nome}?`,
                    text: `Você está prestes a deletar o ${rowData.tipo.toLowerCase()} ${rowData.nome}`,
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonColor: '#d33',
                    confirmButtonColor: '#dd1659',
                    confirmButtonText: 'Deletar',
                    backdrop: `rgba(0,0,0,0.05)`
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteClient()
                    }
                })
            }
        },
        {
            label: ({ rowData }: any) => `Atualizar ${rowData.tipo.toLowerCase()} ${rowData.nome} `,
        }
      ]

    return (
        <>
            <Layout>
                <PageBlock
                    title="Gerenciamento de clientes"
                    subtitle="Dados dos clientes e prospectos."
                    variation="full">
                    <Table
                        fullWidth
                        schema={defaultSchema}
                        items={users}
                        totalizers={[
                            {
                                label: 'Clientes',
                                value: allClients
                            },
                            {
                                label: 'Prospectos',
                                value: allProspects
                            },
                        ]}
                        lineActions={lineActions}
                        toolbar = {{
                            density: {
                                buttonLabel: 'Altura das linhas',
                                lowOptionLabel: 'Alto',
                                mediumOptionLabel: 'Medio',
                                highOptionLabel: 'Baixo',
                            },
                            newLine: {
                                label: 'Novo',
                                handleCallback: async () => {
                                    const { value: formValues } = await Swal.fire({
                                        title: 'Novo prospecto',
                                        html:
                                            '<input type="text" id="swal-input-nome" class="swal2-input" placeholder="Nome" required>' +
                                            '<input type="email" id="swal-input-email" class="swal2-input" placeholder="Email" required>' +
                                            '<input type="number" id="swal-input-telefone" class="swal2-input" placeholder="Telefone" required">',
                                        focusConfirm: false,
                                        preConfirm: () => {
                                            return {
                                                nome: document.getElementById('swal-input-nome').value,
                                                email: document.getElementById('swal-input-email').value,
                                                telefone: document.getElementById('swal-input-telefone').value
                                            }
                                        },
                                        backdrop: `rgba(0,0,0,0.05)`,
                                        confirmButtonColor: '#dd1659'
                                    })

                                    if (formValues) {
                                        if (formValues.nome.trim() == '' || formValues.email.trim() || formValues.telefone.trim()) {
                                            const dataAtualArray = new Date().toLocaleDateString().split('/')
                                            const dataAtual = `${dataAtualArray[2]}-${dataAtualArray[1]}-${dataAtualArray[0]}`

                                            const req = {
                                                ...formValues,
                                                tipo: "Prospecto",
                                                data_criacao: dataAtual
                                            }

                                            const response = await axios.post('https://gabrielvtex--hiringcoders202117.myvtex.com/leads', req)

                                            if (response.res.statusCode == 200 || response.res.statusCode == '200') {
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Prospecto criado!',
                                                    text: `O prospecto ${req.nome} foi criado com sucesso!`
                                                })
                                            }
                                            else {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Algo aconteceu...!',
                                                    text: `Houve algum erro (Status: ${response.res.statusCode})`
                                                })
                                            }
                                        }
                                    }
                                },
                            },
                        }}  
                    />
                </PageBlock>
            </Layout>)
        </>
    )
}

export default Clients