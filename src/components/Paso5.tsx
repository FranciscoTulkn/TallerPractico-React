import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfacePaso5';

const Paso5 = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  const validacionPaso5 = Yup.object({
    nombre1: Yup.string().required('Este campo es requerido'),
    correo1: Yup.string().required('Este campo es requerido'),
    telefono1: Yup.string().required('Este campo es requerido'),
    nombre2: Yup.string().required('Este campo es requerido'),
    correo2: Yup.string().required('Este campo es requerido'),
    telefono2: Yup.string().required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      nombre1: selector.nombre1,
      correo1: selector.correo1,
      telefono1: selector.telefono1,
      nombre2: selector.nombre2,
      correo2: selector.correo2,
      telefono2: selector.telefono2,
    },
    validationSchema: validacionPaso5,
    onSubmit: (values) => { 
      dispatch({ 
        type: 'AgregarDatos', 
        payload: values 
      });
      navigate('/resumen')
    }
    
  });


  return(
    <div className='container'>
      <h2>Paso #5 - Referencias Personales</h2>
      {/* Inicio del formulario para escribir las referencias personales*/}
      {/* referencia uno */}
        <Form onSubmit={formik.handleSubmit} className='Formulario'>

          {/* Campo para el nombre de una referencia*/}
          <Form.Group controlId='nombre1' className='Inputs'>
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control 
              name='nombre1'
              type='text' 
              value={formik.values.nombre1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el nombre' 
              isInvalid={!!formik.errors.nombre1 && formik.touched.nombre1}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.nombre1}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo para el correo de una referencia personal*/}
          <Form.Group controlId='correo1' className='Inputs'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control 
              name='correo1'
              type='text' 
              value={formik.values.correo1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el correo electrónico' 
              isInvalid={!!formik.errors.correo1 && formik.touched.correo1}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.correo1}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo para el telefono de una referencia personal*/}
          <Form.Group controlId='telefono1' className='Inputs'>
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
              name='telefono1'
              type='text' 
              value={formik.values.telefono1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el número de contacto' 
              isInvalid={!!formik.errors.telefono1 && formik.touched.telefono1}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.telefono1}
            </Form.Control.Feedback>
          </Form.Group>

        {/* referencia dos */}

          {/* Campo para el nombre de una referencia*/}
          <Form.Group controlId='nombre2' className='Inputs'>
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control 
              name='nombre2'
              type='text' 
              value={formik.values.nombre2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el nombre' 
              isInvalid={!!formik.errors.nombre2 && formik.touched.nombre2}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.nombre2}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo para el correo de una referencia personal*/}
          <Form.Group controlId='correo2' className='Inputs'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control 
              name='correo2'
              type='text' 
              value={formik.values.correo2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el correo electrónico' 
              isInvalid={!!formik.errors.correo2 && formik.touched.correo2}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.correo2}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Campo para el telefono de una referencia personal*/}
          <Form.Group controlId='telefono2' className='Inputs'>
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
              name='telefono2'
              type='text' 
              value={formik.values.telefono2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Ingrese el número de contacto' 
              isInvalid={!!formik.errors.telefono2 && formik.touched.telefono2}
            />
            <Form.Control.Feedback type='invalid'>
              {formik.errors.telefono2}
            </Form.Control.Feedback>
          </Form.Group>


            {/* Botón para enviar al suiguiente paso del registro */}
            <Button variant='dark' onClick={() => navigate('/paso4')} className='BotonSiguiente'>Atras</Button>
            <Button type='submit' variant='warning' className='BotonSiguiente'>Guardar</Button>
        </Form>
    </div>
  );
};

export default Paso5;