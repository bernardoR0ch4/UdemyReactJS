import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {
    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email);
// limpando form
        setName("");
        setEmail("");

    };


    return (
        <div>
            {/* envio de form */}
            {/* criação de fomr */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm