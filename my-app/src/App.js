import React, { useState } from 'react';
import Topo from './components/Topo';
import Corpo from './components/Corpo';
import Relogio from './components/Relogio';
import Numero from './components/Numero';

export default function App() {
  
  const canal = () => {
    return('CFB Cursos');
  };

  function curso() {
    return('React');
  };

  const [num, setNum] = useState(10);

  return(
    <>
      <Topo />
      <Corpo />
      <p>{'Canal: ' + canal()}</p>
      <p>{curso()}</p>
      <Relogio />
      <p>State num no Arquivo App: {num}</p>
      <Numero num={num} setNum={setNum}/>
    </>
  )
}

