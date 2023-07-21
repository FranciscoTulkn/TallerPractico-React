import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfacePaso1';
import '../Styles/Paso1Style.css';

const Paso1 = () => { 

  // Constante para poder usar el navigate en las rutas
  const navigate = useNavigate();
  // Constate para mantener los datos almancenados
  const dispatch = useDispatch();
  // Constante para poder manipular los datos almacenados
  const selector = useSelector((state: RootState) => state);

  // Función para validar los campos del formulario
  const validacionesPaso1 = Yup.object({
    nombre: Yup.string().required('Este campo es requerido'),
    apellidos: Yup.string().required('Este campo es requerido'),
    correo: Yup.string().email('El correo no es valido').required('Este campo es requerido'),
    telefono: Yup.string().required('Este campo es requerido')
  });

  // Función con el Hook useFormik se encargara de cargar las validaciones, inicializar las variables y enviar el formulario
  const formik = useFormik ({
    initialValues: {
      nombre: selector.nombre,
      apellidos: selector.apellidos,
      correo: selector.correo,
      telefono: selector.telefono,
    },
    validationSchema: validacionesPaso1,
    onSubmit: (values) => { 
      dispatch({ 
        type: 'AgregarDatos', 
        payload: values });
      navigate('/paso2') 
    }
  });

  return (
    <div className='container'>
      <h2>Paso #1 - Datos Básicos</h2>
      {/* Inicio del formulario con Bootstrap */}
      <Form onSubmit={formik.handleSubmit} className='Formulario'>

        {/* Campo para el nombre del usuario */}
        <Form.Group controlId='nombre' className='Inputs'>
          <Form.Label>Nombre: </Form.Label>
          <Form.Control 
            name='nombre'
            type='text' 
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese su nombre' 
            isInvalid={!!formik.errors.nombre && formik.touched.nombre}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para los apellidos del usuario */}
        <Form.Group controlId='apellidos' className='Inputs'>
        <Form.Label>Apellidos: </Form.Label>
          <Form.Control 
            name='apellidos'
            type='text'
            value={formik.values.apellidos} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese sus apellidos' 
            isInvalid={!!formik.errors.apellidos && formik.touched.apellidos}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.apellidos}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el correo electrónico del usuario */}
        <Form.Group controlId='correo' className='Inputs'>
        <Form.Label>Correo: </Form.Label>
          <Form.Control 
            name='correo'
            type='email'
            value={formik.values.correo} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese su correo' 
            isInvalid={!!formik.errors.correo && formik.touched.correo}  
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.correo}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo para el telefono del usuario */}
        <Form.Group controlId='telefono' className='Inputs'>
        <Form.Label>Telefono: </Form.Label>
          <Form.Control 
            name='telefono'
            type='text'
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Ingrese su telefono' 
            isInvalid={!!formik.errors.telefono && formik.touched.telefono}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.telefono}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Botón para enviar al suiguiente paso del registro */}
        <Button type='submit' variant='warning' className='BotonSiguiente'>Siguiente</Button>
      </Form>
    </div>
  );
}

export default Paso1;