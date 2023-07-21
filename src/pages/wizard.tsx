import React from 'react';
import Paso1 from '../components/Paso1';
import '../Styles/Paso1Style.css'

const Wizard = () => {
  return(
    <div>
      <h2 className='titulo'>Formulario de Registro</h2>
      <Paso1 />
    </div>
  );
}

export default Wizard;