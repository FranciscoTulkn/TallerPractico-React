import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfacePaso4';

const Paso4 = () => {

  // Constante para poder usar el navigate en las rutas
  const navigate = useNavigate();
  // Constate para mantener los datos almancenados
  const dispatch = useDispatch();
  // Constante para poder manipular los datos almacenados
  const selector = useSelector((state: RootState) => state);

  const validacionPaso4 = Yup.object({
    biografia: Yup.string().required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      biografia: selector.biografia,
    },
    validationSchema: validacionPaso4,
    onSubmit: (values) => { 
      dispatch({ 
        type: 'AgregarDatos', 
        payload: values });
      navigate('/paso5') }
  });


  return(
    <div className='container'>
      <h2>Paso #4 - Biografía</h2>
{/* Inicio del formulario para escribir la Biografía */}
      <Form onSubmit={formik.handleSubmit} className='Formulario'>

        {/* Campo para la Biografía*/}
        <Form.Group controlId='biografia'  className='Inputs'>
          <Form.Label>Nombre de la empresa </Form.Label>
          <Form.Control 
            name='biografia'
            type='textarea' 
            value={formik.values.biografia}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese aquí el texto....' 
            isInvalid={!!formik.errors.biografia && formik.touched.biografia}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.biografia}
          </Form.Control.Feedback>
        </Form.Group>


          {/* Botón para enviar al suiguiente paso del registro */}
          <Button variant='dark' onClick={() => navigate('/paso3')} className='BotonSiguiente'>Atras</Button>
          <Button type='submit' variant='warning'  className='BotonSiguiente'>Siguiente</Button>
        </Form>
    </div>
  )
};

export default Paso4;