//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Title from './otsikko';
import Timantti from './Paivantimantti';
import Timantti2 from './Paivantimantti2';
import Mainos from './Mainos';
import Uutinen from './Uutinen';
import Uutisteksti from './Uutinenteksti';

function App() {
  return (
    <div className="App">
      <Title/>
      <Timantti/>
      <Timantti2/>
      <Mainos/>
      <Uutinen/>
      <Uutisteksti/>
    </div>
  );
}

export default App;
