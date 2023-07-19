import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'

const Paso3 = () => {

  const validacionPaso3 = Yup.object({
    empresa: Yup.string().required('Este campo es requerido'),
    cargo: Yup.string().required('Este campo es requerido'),
    fechaInicio: Yup.date().required('Este campo es requerido'),
    fechaFin: Yup.date().required('Este campo es requerido').min(Yup.ref('fechaInicio'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio')
  });

  const formik = useFormik({
    initialValues: {
      empresa: "",
      cargo: "",
      fechaInicio: "",
      fechaFin: ""
    },
    validationSchema: validacionPaso3,
  });


  return(
    <div>
      <h2>Paso #3 - Experiencia Laboral</h2>
{/* Inicio del formulario para diligenciar la experiencia laboral */}
      <Form onSubmit={formik.handleSubmit}>

        {/* Campo para el nombre de la empresa */}
        <Form.Group controlId='empresa'>
          <Form.Label>Nombre de la empresa </Form.Label>
          <Form.Control 
            name='empresa'
            type='text' 
            value={formik.values.empresa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese el nombre de la empresa' 
            isInvalid={!!formik.errors.empresa && formik.touched.empresa}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.empresa}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el cargo desempañado en la empresa */}
        <Form.Group controlId='cargo'>
          <Form.Label>Cargo desempeñado </Form.Label>
          <Form.Control 
            name='cargo'
            type='text' 
            value={formik.values.cargo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese el nombre del cargo' 
            isInvalid={!!formik.errors.cargo && formik.touched.cargo}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.cargo}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para la fecha inicial en la empresa */}
        <Form.Group controlId='fechaInicio'>
          <Form.Label>Fecha de inicio </Form.Label>
          <Form.Control 
            name='cargo'
            type='date' 
            value={formik.values.fechaInicio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            isInvalid={!!formik.errors.fechaInicio && formik.touched.fechaInicio}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaInicio}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para la fecha inicial en la empresa */}
        <Form.Group controlId='fechaFin'>
          <Form.Label>Fecha final </Form.Label>
          <Form.Control 
            name='fechaFin'
            type='date' 
            value={formik.values.fechaFin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            isInvalid={!!formik.errors.fechaInicio && formik.touched.fechaFin}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaFin}
          </Form.Control.Feedback>
        </Form.Group>

      {/* Botón para enviar al suiguiente paso del registro */}
      <Button type='submit' variant='dark'>Atras</Button>
      <Button type='submit' variant='warning'>Siguiente</Button>
        </Form>
    </div>
  )
};

export default Paso3;