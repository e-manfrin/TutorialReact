import React, { useState } from 'react';
import './App.css';

import Footter from './componentes/Footter';
import Header  from './componentes/Header'
import { Testando } from './componentes/Testando';
import { Teste  } from './componentes/Teste'


const App = () => {

  const [ nome, setNome ] = useState<string> ('Emily')
  const [ idade, setIdade ] = useState<number> (90);
  const [ bg, setBg ] = useState<string> ('#FF0000');

  const [ lista, setLista ] = useState<string[]> ([
    'Primeiro',
    'Segundo',
    'Terceiro'
  ]);

  const noventa = () => {
    setIdade(90);
    setBg('#CCCCCC')
  }

  const vinte = () => {
    setIdade(20);
    setBg('#00FF00')
  }

  return (
    <div style={{background: bg}}>

      <Header nome={nome} idade={idade}/>
      
      { idade === 90 && 
        <button onClick={vinte}> Tenho 20</button>
      }
      { idade === 20 &&
        <button onClick={noventa}> Tenho 90</button>
      }

      <hr/>

      <ul>
        {lista.map((frase, index) => (
          <li key={index} >{frase}</li>
        ))} 
      </ul>

      <Footter/>
      
      <Teste/>

      <Testando />

    </div>
  );
}

export default App;
