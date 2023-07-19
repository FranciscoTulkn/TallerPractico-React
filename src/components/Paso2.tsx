import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'

const Paso2 = () => {

  // Función para realizar las validaciones de los campos del formulario
  const validacionesPaso2 = Yup.object({
    institucion: Yup.string().required('Este campo es requerido'),
    carrera: Yup.string().required('Este campo es requerido'),
    fechaInicio: Yup.date().required('Este campo es requerido'),
    fechaFin: Yup.date().required('Este campo es requerido')
    .min(Yup.ref('fechaInicio'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio')
  });

  // Función con el Hook useFormik se encargara de cargar las validaciones, inicializar las variables y enviar el formulario
  const formik = useFormik({
    initialValues: {
      institucion: '',
      carrera: '',
      fechaInicio: '',
      fechaFin: ''
    },
    validationSchema: validacionesPaso2,
    onSubmit: (values) => (console.log(values)
    )
  });

  return(
    <div>
      <h2>Paso #2 - Formación Académica</h2>
      <Form onSubmit={formik.handleSubmit}>

        {/* Campo para el nombre de la institución */}
        <Form.Group controlId='institucion'>
          <Form.Label>Nombre Institución</Form.Label>
          <Form.Control 
            name='institucion' 
            type='text' 
            value={formik.values.institucion}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder='Ingrese el nombre de la institución'
            isInvalid={!!formik.errors.institucion && formik.touched.institucion}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.institucion}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para la carrera o programa */}
        <Form.Group controlId='carrera'>
          <Form.Label>Carrera o Programa</Form.Label>
          <Form.Control 
            name='carrera'
            type='text'
            value={formik.values.carrera}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder='Ingrese el nombre de la carrera o programa'
            isInvalid={!!formik.errors.carrera && formik.touched.carrera}
          />
          <Form.Control.Feedback>
            {formik.errors.carrera}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para diligenciar el inicio de la formación */}
        <Form.Group controlId='fechaInicio'>
          <Form.Label>Fecha Inicio Formación</Form.Label>
          <Form.Control 
            name='fechaInicio'
            type='date'
            value={formik.values.fechaInicio}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.fechaInicio && formik.touched.fechaInicio}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaInicio}
          </Form.Control.Feedback>
        </Form.Group>
                
        {/* Campo para diligenciar el fin de la formación */}
        <Form.Group controlId='fechaFin'>
        <Form.Label>Fecha Fin Formación</Form.Label>
          <Form.Control 
            name='fechaFin'
            type='date'
            value={formik.values.fechaFin}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.fechaFin && formik.touched.fechaFin}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaFin}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Botón para enviar al anterior paso del registro */}
        <Button type='submit' variant='dark'>Atras</Button>

        {/* Botón para enviar al siguiente paso del registro */}
        <Button type='submit' variant='warning'>Siguiente</Button>
      </Form>
    </div>
  );
}

export default Paso2;
