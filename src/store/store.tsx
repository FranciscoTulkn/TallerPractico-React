import { configureStore } from '@reduxjs/toolkit';

const initialValue = {
  nombre: '',
  apellidos: '',
  correo: '',
  telefono: '',
  institucion: '',
  carrera: '',
  fechaInicioEducacion: '',
  fechaFinEducacion: '',
  empresa: "",
  cargo: "",
  fechaInicio: "",
  fechaFin: "",
  biografia: "",
  nombre1: "",
  correo1: "",
  telefono1: "",
  nombre2: "",
  correo2: "",
  telefono2: "",
};

const reducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case 'AgregarDatos':
      return {...state, ...action.payload};
    default: 
      return {};
  }
}

const store = configureStore({ reducer  });

export default store;
