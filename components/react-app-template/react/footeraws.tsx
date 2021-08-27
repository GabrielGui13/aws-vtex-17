import React  from 'react'

import styles from './styles.css';

const footer = () => 
<div className={styles.container}>
        <form className={styles.form}>
            <>
            <h1 className={styles.title}>
            Cadastre seu email na AWS</h1>
            </>
            <>
            <h4>Nome:</h4>
            <input className={styles.input} type="text" name="name" id="name"
            placeholder="Seu Nome"/>
            </>        

            <>
            <h4>email:</h4>
            <input className={styles.input} type="email" name="email" id="email"
            placeholder="Seu E-mail" required />    
            </>

            <>
            <h4>Telefone:</h4>
            <input className={styles.input} type="tel" name="tel" id="tel"
            placeholder="Seu Telefone" required />
            </>
            <>
            <button className={styles.button} type="submit">Cadastrar</button>
            </>
        </form>      
</div>

export default formulario