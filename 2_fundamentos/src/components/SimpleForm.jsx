import React, { useState } from 'react'

function SimpleForm() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(nome, email);
    }

    return (
        <>
            <div>Formulário simples</div>

            <form onSubmit={handleSubmit}>
                <input placeholder='Nome' type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} />
                <input placeholder='Email' type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <button>Enviar</button>
            </form>

        </>

    )
}

export default SimpleForm