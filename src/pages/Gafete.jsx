import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './Gafete.css'


const Gafete = () => {
  const {usuario} = useLoaderData();

  const formatTwitterHandle = (handle) => {
    if (!handle) return '';
    return handle.startsWith('@') ? handle : `@${handle}`;
  };


  const generateUserId = (nombre, apellidoPaterno) => {
    const base = (nombre + apellidoPaterno).toUpperCase().replace(/\s/g, '');
    return base.slice(0, 12) || 'USERID123456';
  };

  return (
    <div className="gafete-container">
      <div className="gafete-inner">
        {/* LADO FRONTAL */}
        <div className="gafete-front">
          <div className="gafete-decorative-circle"></div>
          <div className="gafete-decorative-circle2"></div>
          
          <div>
            <h1 className="gafete-nombre">{usuario.nombre} {usuario.apellidoPaterno} {usuario.apellidoMaterno}</h1>
          </div>

          <div className="gafete-avatar-container">
            <img 
              src={usuario.avatar} 
              alt="Avatar del usuario"
              className="gafete-avatar"
            />
          </div>

          <p className="gafete-instructions">Pasa el cursor para ver el reverso</p>
        </div>

        {/* LADO TRASERO */}
        <div className="gafete-back">
          <div className="gafete-decorative-square"></div>
          
          <div>
            <h1 className="gafete-nombre">{usuario.nombre} {usuario.apellidoPaterno} {usuario.apellidoMaterno}</h1>
            <p className="gafete-id">
              {generateUserId(usuario.nombre, usuario.apellidoPaterno)}
            </p>
          </div>

          <div>
            <hr className="gafete-divider" />
            
            <div className="gafete-info-section">
              <div className="gafete-info-item">
                <span className="gafete-value">{usuario.email}</span>
              </div>
              
              <div className="gafete-info-item">
                <span className="gafete-value">{usuario.ocupacion.toUpperCase()}</span>
              </div>
            </div>

            {usuario.usuarioTwitter && (
              <div className="gafete-social">
                {formatTwitterHandle(usuario.usuarioTwitter)}
              </div>
            )}
          </div>

          <div>
            <hr className="gafete-divider" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gafete

export const loaderGafete = async ({ params }) => {
  const API = import.meta.env.VITE_API_URL;
  
  console.log('VITE_API_URL:', API);
  console.log('params.id:', params.id);
  console.log('Full URL would be:', `${API}/participante/${params.id}`);
  
  
  const correctURL = `https://backend-examenp2.onrender.com/api/participante/${params.id}`;
  console.log('Correct URL:', correctURL);
  
  const res = await fetch(correctURL);
  
  if (!res.ok) {
    throw new Error('No se pudo cargar el gafete');
  }
  
  const data = await res.json();
  return { usuario: data.data };
};