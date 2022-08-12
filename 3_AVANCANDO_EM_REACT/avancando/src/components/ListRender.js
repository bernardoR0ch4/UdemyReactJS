import { useState } from "react"


const ListRender = () => {

    const [list] = useState(["Bernardo", "Arthur", "Xarope", "Maria"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Bernardo", age: 27 },
        { id: 2, name: "Arthur", age: 28 },
        { id: 3, name: "Xarope", age: 26 },
        { id: 4, name: "Maria", age: 62 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete render user</button>
        </div>
    );
};

export default ListRender;