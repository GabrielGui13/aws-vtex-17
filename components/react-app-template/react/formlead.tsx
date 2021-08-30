/* eslint-disable prettier/prettier */
import React, { useState, FormEvent } from 'react'

import styles from './styles.css';

const Formulario = () => {
    
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [phoneField, setPhoneField] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const formData = {
            name: nameField,
            email: emailField,
            phone: phoneField
        }

        setNameField('')
        setEmailField('')
        setPhoneField('')

        console.log(formData)
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