import React from 'react'
import Paso1 from '../components/Paso1';
import Paso2 from '../components/Paso2'

const Wizard = () => {
  return(
    <div>
      <h2>Wizard</h2>
      <Paso1 />
      <Paso2 />
    </div>
  );
}

export default Wizard;