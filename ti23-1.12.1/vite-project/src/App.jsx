import React, { useEffect, useState } from 'react';
import './App.css';
import Mensagem from './componentes/Mensagem';
import Titulo from './componentes/Titulo';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [mensagens, setMensagens] = React.useState([
    {
      mensagem: 'Oi...',
      visualizado: true,
      remetente: false,
    },
    {
      mensagem: 'Tu não me ama mais?',
      visualizado: true,
      remetente: false,
    },
    {
      mensagem: 'Oi, boa tarde.',
      visualizado: false,
      remetente: true,
    },
    {
      mensagem: 'Quem é você mesmo?',
      visualizado: false,
      remetente: true,
    },
    {
      mensagem: 'Eu não lembro...',
      visualizado: false,
      remetente: true,
    },
  ])
  return (
    <div>
      <div className='chat'>
        <Titulo />
        <div className='content'>
          {
            loading == false && (
              <ul>
                <Mensagem mensagem={"oi"} visualizado={true} remetente={false} />
                <Mensagem mensagem={"tu nao me ama mais?"} visualizado={true} remetente={false} />
                <Mensagem mensagem={"Boa tarde"} visualizado={false} remetente={true} />
                <Mensagem mensagem={"Quem é voce mesmo?"} visualizado={false} remetente={true} />
                <Mensagem mensagem={"Nao lembro"} visualizado={false} remetente={true} />
              </ul>
            )
          }
        </div>
      </div>




    </div>
  )
}

export default App;