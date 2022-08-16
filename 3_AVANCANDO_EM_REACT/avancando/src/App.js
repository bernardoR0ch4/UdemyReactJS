import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  //const name = "Joaquim"

  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand:"Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id: 2, brand:"McLaurent", color: "Cinza", newCar: false, km: 3000},
    {id: 3, brand:"Mercedes", color: "Preta", newCar: false, km: 20000},
  ];

  function showMessage(){
    console.log("Evento do componente pai")
  };

  const [message, setMessage] = useState("");

  const handleMessage =(msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Bernardo", job: "Programador", age: 27},
    {id: 2, name: "João", job: "Engenheiro", age: 32},
    {id: 3, name: "Miguel", job: "Psicólogo", age: 23},
    {id: 4, name: "Zé", job: "Motora", age: 16},
  ]

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="City" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={100000} color="vermelho" newCar={false } />
      <CarDetails brand="Ford" km={0} color="Branca" newCar={true} />
      <CarDetails brand="Fiat" km={25000} color="Azul" newCar={false} />
      {cars.map ((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="teste"/>
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando container</h5>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {users.map((user) =>(
        <UserDetails 
        key={user.id} 
        name={user.name} 
        job={user.job} 
        age={user.age}
        />
      ))}
    </div>
  );
};

export default App;
