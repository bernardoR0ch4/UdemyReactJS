import React from 'react'

const UserDetails = ({ name, job, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
            {age >= 18? (<p>Pode tirar cnh</p>
            ) : (<p>Menor de idade</p>
            )}
        </div>
    )
}

export default UserDetails