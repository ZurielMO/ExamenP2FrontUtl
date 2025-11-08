import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
    const navigation = useNavigation();
  return (
    <div>
      <Navbar/>
      <main className='container'>
        {
          //idle subbmitting loading
          navigation.state === "loading" && (
            <div className='alert alert-info my-5'>Cargando...</div>
          )
        }
        <Outlet/>
      </main>
      {/* Footer */}
      <br></br>
      <footer className="row bg-dark text-white py-3">
        <div className="col-12 text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Universidad Tecnológica de León - Todos los derechos reservados
          </p>
        </div>
      </footer>

      <style jsx>{`
        .object-fit-cover {
          object-fit: cover;
        }
        
        .vh-100 {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex: 1;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default LayoutPublic
