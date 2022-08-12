import { useState } from "react"


const ListRender = () => {

    const [list] = useState(["Bernardo", "Arthur", "Xarope", "Maria"]);

    const [users] = useState([
        {id: 1, name: "Bernardo", age: 27},
        {id: 2, name: "Arthur", age: 28},
        {id: 3, name: "Xarope", age: 26},
        {id: 23628376, name: "Maria", age: 62},
    ]);

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
    </div>
  );
};

export default ListRender;