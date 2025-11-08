/**
 * Archivo que representa la definición del estado, aquí estará el estado que se va a consumir.
 */

import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios';
import UserContext from './UserContext';
import { POST_USER } from '../types';
import {Alert, Breadcrumb, Button, Form, Row,Col, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const UserState = (props) => {

    //Definimos el estado inicial
    const initialState = {
        users: [],
        selectedUser: null
    }
//x-api-key: reqres-free-v1
    //Definimos el useReducer para manejar el estado de la aplicación.
    const [state, dispatch] = useReducer(UserReducer, initialState);

    
    const postUser = async (nombre, apellidoPaterno, apellidoMaterno, email, usuarioTwitter, ocupacion, avatar) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/registro`,
      {
        usuario: {
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          email,
          usuarioTwitter,
          ocupacion,
          avatar
        }
      }
    );

    console.log("Respuesta del servidor:", res.data);

    dispatch({
      type: POST_USER,
      payload: res.data.data
    });

    return res;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};



    

  return (
    <UserContext.Provider value={{
        users: state.users,
        selectedUser: state.selectedUser,
        postUser
    }}>
        {props.children}
    </UserContext.Provider>

  )
}

export default UserState
