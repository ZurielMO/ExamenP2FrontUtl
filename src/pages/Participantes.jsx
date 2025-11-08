import React from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";



const Participantes = () => {
  const { participantes, buscado } = useLoaderData();
  const lista = buscado && buscado.length > 0 ? buscado : participantes;

  return (
    <div className="container mt-4">

      <h2 className="mb-3 fw-bold ">Buscar Participante</h2>

      {/* Buscador */}
      <Form method="get" className="d-flex gap-2 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Buscar participante..."
          className="form-control"
        />
        <Button type="submit" variant="primary">
          Buscar
        </Button>
      </Form>

      <hr />

      {/* Grid de tarjetas */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">

        {lista.length > 0 ? (
          lista.map((usuario) => (
            <Col key={usuario.idUsuario}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={usuario.avatar}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    {usuario.nombre} {usuario.apellidoPaterno}
                  </Card.Title>

                  <Card.Text>
                    <p>
                      <strong>Ocupación:</strong> {usuario.ocupacion}
                    </p>

                    {usuario.usuarioTwitter && (
                      <a
                        href={`https://twitter.com/${usuario.usuarioTwitter.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{usuario.usuarioTwitter.replace("@", "")}
                      </a>
                    )}
                  </Card.Text>

                  <div className="text-center">
                    <Link to={`/gafete/${usuario.idUsuario}`}>
                      <Button variant="primary" className="w-100">
                        Ver gafete
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No users found</p>
        )}

      </Row>
    </div>
  );
};

export default Participantes;

export const loaderParticipantes = async ({ params, request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search");

  const API = import.meta.env.VITE_API_URL; 

  const res1 = await fetch(`${API}/listado`);
  const data1 = await res1.json();

  let resultadoBusqueda = null;

  if (query) {
    const res2 = await fetch(`${API}/listadoBusqueda?q=${query}`);
    const data2 = await res2.json();
    resultadoBusqueda = data2.data;
  }

  return {
    participantes: data1.data,
    buscado: resultadoBusqueda,
  };
};
