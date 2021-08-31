/* eslint-disable prettier/prettier */
import React, { useState, FormEvent } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import styles from './styles.css';

const Formulario = () => {
    const endpoint = 'https://gabrielvtex--hiringcoders202117.myvtex.com/leads'

    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [phoneField, setPhoneField] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const formData = {
            nome: nameField,
            email: emailField,
            telefone: phoneField
        }

        const dataAtualArray = new Date().toLocaleDateString().split('/')
        const dataAtual = `${dataAtualArray[2]}-${dataAtualArray[1]}-${dataAtualArray[0]}`

        const reqBody = {
            ...formData,
            tipo: "Prospecto",
            data_criacao: dataAtual
        }

        const response = await axios.post(endpoint, reqBody)

        if (response.data.res.statusCode == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Prospecto criado!',
                text: `O prospecto ${formData.nome} foi criado com sucesso!`,
                backdrop: `rgba(0,0,0,0.05)`,
                confirmButtonColor: '#EC7211'
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Algo aconteceu...!',
                text: `Houve algum erro (Status: ${response.data.res.statusCode})`,
                backdrop: `rgba(0,0,0,0.05)`,
                confirmButtonColor: '#EC7211'
            })
        }

        setNameField('')
        setEmailField('')
        setPhoneField('')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formTitle}> Cadastre seu email na AWS</h1>

                <h4>Nome:</h4>
                <input className={styles.formInput} type="text" name="name" id="name" placeholder="Seu Nome" value={nameField} onChange={(e) => setNameField(e.target.value)} />

                <h4>Email:</h4>
                <input className={styles.formInput} type="email" name="email" id="email"placeholder="Seu E-mail" value={emailField} onChange={(e) => setEmailField(e.target.value)} required />

                <h4>Telefone:</h4>
                <input className={styles.formInput} type="tel" name="tel" id="tel" placeholder="Seu Telefone" value={phoneField} onChange={(e) => setPhoneField(e.target.value)} required />

                <button className={styles.formButton} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Formulario