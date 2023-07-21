import React from 'react'
import { useSelector } from 'react-redux';


const Resumen = () => {

  const selector = useSelector(state => state);

  const datosRegistrados = Object.entries(selector);

  return(
    <div className='container'>
      <h3 className='Resumen'>Resumen</h3>
      {
        datosRegistrados.map(([key, values]) => {
          return (
            <div key={key} className='datosResumen'>
              <h3>{key}</h3>
              <p>{values}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Resumen;