import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">

      <header className="row bg-light py-3 shadow-sm m-0">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <img 
              src="https://www.kindpng.com/picc/m/18-181377_utl-logo-de-la-universidad-tecnologica-de-leon.png"
              alt="Universidad Tecnológica Linares"
              className="img-fluid"
              style={{ maxHeight: '80px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80'%3E%3Crect width='200' height='80' fill='%23007bff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='14'%3EUTL Logo%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="ms-3">
              <h1 className="h4 mb-0 text-primary">Universidad Tecnológica de León</h1>
              <small className="text-muted">Sistema de Congreso de Tecnologías de la Información</small>
            </div>
          </div>
        </div>
      </header>


      <main className="row flex-grow-1 align-items-stretch m-0">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-5 bg-white">
          <div className="text-center">
            <h2 className="display-5 fw-bold text-dark mb-4">
              Congreso de Tecnologías de la Información 2025
            </h2>
            <p className="lead text-muted mb-4">
              Bienvenido al sistema oficial del congreso. Accede para gestionar tu participación, 
              ver el programa de eventos y conectarte con la comunidad tecnológica.
            </p>
            <NavLink to="/participantes" className="btn btn-outline-primary">
              Entrar
            </NavLink>
          </div>
        </div>

        <div className="col-12 col-lg-6 p-0">
          <img 
            src="https://carreras.uleam.edu.ec/chone-technology-week/wp-content/uploads/sites/92/2024/05/congresoooo-1024x836.png"
            alt="Congreso de Tecnologías de la Información UTL"
            className="img-fluid w-100 h-100 object-fit-cover"
            style={{ objectPosition: 'center' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23173b5f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EImagen Congreso TI%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </main>

      <footer className="row bg-dark text-white py-3 m-0">
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

        /* Evita que la imagen se extienda fuera de la pantalla */
        main {
          min-height: 0;
        }

        @media (max-width: 992px) {
          main .col-12.col-lg-6.p-0 img {
            height: auto !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Home;
