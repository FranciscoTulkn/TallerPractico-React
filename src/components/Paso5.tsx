import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'

const Paso5 = () => {

  const validacionPaso5 = Yup.object({
    nombre: Yup.string().required('Este campo es requerido'),
    correo: Yup.string().required('Este campo es requerido'),
    telefono: Yup.string().required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      telefono: ""
    },
    validationSchema: validacionPaso5,
  });


  return(
    <div>
      <h2>Paso #5 - Referencias Personales</h2>
{/* Inicio del formulario para escribir las referencias personales*/}
      <Form onSubmit={formik.handleSubmit}>

        {/* Campo para el nombre de una referencia*/}
        <Form.Group controlId='nombre'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            name='nombre'
            type='text' 
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese aquí el texto....' 
            isInvalid={!!formik.errors.nombre && formik.touched.nombre}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el correo de una referencia personal*/}
        <Form.Group controlId='correo'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control 
            name='correo'
            type='text' 
            value={formik.values.correo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese aquí el texto....' 
            isInvalid={!!formik.errors.correo && formik.touched.correo}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.correo}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el telefono de una referencia personal*/}
        <Form.Group controlId='corrtelefonoeo'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control 
            name='telefono'
            type='text' 
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese aquí el texto....' 
            isInvalid={!!formik.errors.telefono && formik.touched.telefono}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.telefono}
          </Form.Control.Feedback>
        </Form.Group>


          {/* Botón para enviar al suiguiente paso del registro */}
          <Button type='submit' variant='dark'>Atras</Button>
          <Button type='submit' variant='warning'>Guardar</Button>
        </Form>
    </div>
  )
};

export default Paso5;