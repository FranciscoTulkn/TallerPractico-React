import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'

const Paso4 = () => {

  const navigate = useNavigate();

  const validacionPaso4 = Yup.object({
    biografia: Yup.string().required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      biografia: "",
    },
    validationSchema: validacionPaso4,
    onSubmit: () => { navigate('/paso5') }
  });


  return(
    <div>
      <h2>Paso #4 - Biografía</h2>
{/* Inicio del formulario para escribir la Biografía */}
      <Form onSubmit={formik.handleSubmit}>

        {/* Campo para la Biografía*/}
        <Form.Group controlId='biografia'>
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
          <Button type='submit' variant='dark'>Atras</Button>
          <Button type='submit' variant='warning'>Siguiente</Button>
        </Form>
    </div>
  )
};

export default Paso4;