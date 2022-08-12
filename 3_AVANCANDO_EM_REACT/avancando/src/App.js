import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

    const name = "Joaquim"

    const [userName] = useState("Maria")

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="City" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
      <CarDetails brand="VW" km={100000} color="vermelho"/>
    </div>
  );
};

export default App;
