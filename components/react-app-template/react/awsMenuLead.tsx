import React, { FC, useState } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import axios from 'axios'


export interface UserType {
  telefone: number;
  nome: string;
  data_criacao: string;
  data_atualizacao: string;
  email: string;
  tipo: string;
}

const AwsMenuLead: FC = () => {

  const [users, setUsers] = useState<UserType[]>([])

  function Get() {
    axios.get('https://kjnud826rd.execute-api.us-east-2.amazonaws.com/development/leads')
      .then((response: any) => {
        console.log('oi');
        console.log(response.data);
        setUsers([...response.data])
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
      });
  }

  Get();

  const defaultSchema = {
    properties: {
      nome: {
        title: 'Nome',
      },
      email: {
        title: 'Email',
      },
      telefone: {
        title: 'Telefone',
      },
      tipo: {
        title: 'Tipo',
      },
      data_criacao: {
        title: 'Data Criação',
      },
      data_atualizacao: {
        title: 'Data Atualização',
      },
    },
  }

  return (
    <Layout>
      <PageBlock
        title="Clientes x Prospecto"
        subtitle="Dados dos clientes e prospectos."
        variation="full">
        <Table
          fullWidth
          schema={defaultSchema}
          items={users}
        />
      </PageBlock>
    </Layout>)
}

export default AwsMenuLead