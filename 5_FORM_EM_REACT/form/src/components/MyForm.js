import './MyForm.css'

import {useState} from 'react'

const MyForm = () => {
// gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name);


  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={handleName}
                />
            </div>
            {/* label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu email" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm