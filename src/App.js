import React from 'react';

import './App.css';

import CardapioG from './cardapioG.png'
import Telefone from './telefone.png'


function App() {
  return (
    <div>
      <div>
        <img src={CardapioG} alt="Cardápio Tchê Lanches" width="425px"/>
      </div>
      <div className="telefone">
        <img src={Telefone} alt="Contato" width="425px" />
      </div>
    </div>
  );
}

export default App;