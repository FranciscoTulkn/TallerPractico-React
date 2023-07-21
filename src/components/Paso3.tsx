import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfacePaso3';

const Paso3 = () => {

  // Constante para poder usar el navigate en las rutas
  const navigate = useNavigate();
  // Constate para mantener los datos almancenados
  const dispatch = useDispatch();
  // Constante para poder manipular los datos almacenados
  const selector = useSelector((state: RootState) => state);

  const validacionPaso3 = Yup.object({
    empresa: Yup.string().required('Este campo es requerido'),
    cargo: Yup.string().required('Este campo es requerido'),
    fechaInicio: Yup.date().required('Este campo es requerido'),
    fechaFin: Yup.date().required('Este campo es requerido').min(Yup.ref('fechaInicio'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio')
  });

  const formik = useFormik({
    initialValues: {
      empresa: selector.empresa,
      cargo: selector.cargo,
      fechaInicio: selector.fechaInicio,
      fechaFin: selector.fechaFin,
    },
    validationSchema: validacionPaso3,
    onSubmit: (values) => { 
      dispatch({ 
        type: 'AgregarDatos', 
        payload: values });
      navigate('/paso4') }
  });


  return(
    <div className='container'>
      <h2>Paso #3 - Experiencia Laboral</h2>
{/* Inicio del formulario para diligenciar la experiencia laboral */}
      <Form onSubmit={formik.handleSubmit} className='Formulario'>

        {/* Campo para el nombre de la empresa */}
        <Form.Group controlId='empresa' className='Inputs'>
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
          <Form.Control.Feedback type='invalid' className='Inputs'>
            {formik.errors.empresa}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el cargo desempañado en la empresa */}
        <Form.Group controlId='cargo' className='Inputs'>
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
        <Form.Group controlId='fechaInicio' className='Inputs'>
          <Form.Label>Fecha de inicio </Form.Label>
          <Form.Control 
            name='fechaInicio'
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
        <Form.Group controlId='fechaFin' className='Inputs'>
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
      <Button variant='dark' onClick={() => navigate('/paso2')} className='BotonSiguiente'>Atras</Button>
      <Button type='submit' variant='warning' className='BotonSiguiente'>Siguiente</Button>
        </Form>
    </div>
  )
};

export default Paso3;