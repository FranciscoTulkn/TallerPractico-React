import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfacePaso2';
import '../Styles/Paso1Style.css';

const Paso2 = () => {

  // Constante para poder usar el navigate en las rutas
  const navigate = useNavigate();
  // Constate para mantener los datos almancenados
  const dispatch = useDispatch();
  // Constante para poder manipular los datos almacenados
  const selector = useSelector((state: RootState) => state);

  // Función para realizar las validaciones de los campos del formulario
  const validacionesPaso2 = Yup.object({
    institucion: Yup.string().required('Este campo es requerido'),
    carrera: Yup.string().required('Este campo es requerido'),
    fechaInicioEducacion: Yup.date().required('Este campo es requerido'),
    fechaFinEducacion: Yup.date().required('Este campo es requerido')
    .min(Yup.ref('fechaInicioEducacion'), 'La fecha de fin debe ser posterior o igual a la fecha de inicio')
  });

  // Función con el Hook useFormik se encargara de cargar las validaciones, inicializar las variables y enviar el formulario
  const formik = useFormik({
    initialValues: {
      institucion: selector.institucion,
      carrera: selector.carrera,
      fechaInicioEducacion: selector.fechaInicioEducacion,
      fechaFinEducacion: selector.fechaFinEducacion
    },
    validationSchema: validacionesPaso2,
    onSubmit: (values) => { 
      dispatch({ 
        type: 'AgregarDatos', 
        payload: values });
      navigate('/paso3') }
  });

  return(
    <div className='container'>
      <h2>Paso #2 - Formación Académica</h2>
      <Form onSubmit={formik.handleSubmit} className='Formulario'>

        {/* Campo para el nombre de la institución */}
        <Form.Group controlId='institucion'  className='Inputs'>
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
        <Form.Group controlId='carrera' className='Inputs'>
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
        <Form.Group controlId='fechaInicioEducacion' className='Inputs'>
          <Form.Label>Fecha Inicio Formación</Form.Label>
          <Form.Control 
            name='fechaInicioEducacion'
            type='date'
            value={formik.values.fechaInicioEducacion}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.fechaInicioEducacion && formik.touched.fechaInicioEducacion}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaInicioEducacion}
          </Form.Control.Feedback>
        </Form.Group>
                
        {/* Campo para diligenciar el fin de la formación */}
        <Form.Group controlId='fechaFinEducacion' className='Inputs'>
        <Form.Label>Fecha Fin Formación</Form.Label>
          <Form.Control 
            name='fechaFinEducacion'
            type='date'
            value={formik.values.fechaFinEducacion}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.fechaFinEducacion && formik.touched.fechaFinEducacion}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.fechaFinEducacion}
          </Form.Control.Feedback>
        </Form.Group>

        <div className='Botones'>
          {/* Botón para enviar al anterior paso del registro */}
          <Button variant='dark' onClick={() => navigate('/paso1')} className='BotonSiguiente'>Atras</Button>

          {/* Botón para enviar al siguiente paso del registro */}
          <Button type='submit' variant='warning' className='BotonSiguiente'>Siguiente</Button>
        </div>
        
      </Form>
    </div>
  );
}

export default Paso2;
