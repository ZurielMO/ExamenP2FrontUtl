import React, { useContext, useState } from 'react';
import { Alert, Button, Form, Row, Col, Container, Modal, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../context/User/UserContext';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [usuarioTwitter, setUsuarioTwitter] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [avatar, setAvatar] = useState("");

  const { postUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState(null);
  const [modo, setModo] = useState("crear");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postUser(nombre, apellidoPaterno, apellidoMaterno, email, usuarioTwitter, ocupacion, avatar);
    if (res) {
      setResponse(res.data);
      setModo("crear");
      handleShow();
    }
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg p-4"
        style={{
          width: "60%",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #003d80, #0059b3)",
          color: "white"
        }}
      >
        <h3 className="text-center mb-4 fw-bold">Registro de Participante</h3>

        <Form onSubmit={handleSubmit}>
          
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Nombre</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Daniela"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Apellido Paterno</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Mora"
                  value={apellidoPaterno}
                  onChange={(e) => setApellidoPaterno(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Apellido Materno</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Herrera"
                  value={apellidoMaterno}
                  onChange={(e) => setApellidoMaterno(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Correo electrónico</Form.Label>
                <Form.Control 
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Usuario de Twitter</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="@usuario"
                  value={usuarioTwitter}
                  onChange={(e) => setUsuarioTwitter(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md>
              <Form.Group>
                <Form.Label className="fw-semibold">Ocupación</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Programador"
                  value={ocupacion}
                  onChange={(e) => setOcupacion(e.target.value)}
                  className="border-0 shadow-sm"
                />
              </Form.Group>
            </Col>
          </Row>


          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center mt-4">
              <Form.Group align="center">
                <Form.Label>Selecciona tu Avatar</Form.Label>

                <div style={{ display: "flex", gap: "20px" }}>
                    

                    <label>
                    <input
                        type="radio"
                        name="avatar"
                        value="/avatars/avatar1.jpg"
                        checked={avatar === "/avatars/avatar1.jpg"}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                        src="/avatars/avatar1.jpg"
                        alt="Avatar 1"
                        style={{ width: "80px", cursor: "pointer", borderRadius: "10px" }}
                    />
                    </label>


                    <label>
                    <input
                        type="radio"
                        name="avatar"
                        value="/avatars/avatar2.jpg"
                        checked={avatar === "/avatars/avatar2.jpg"}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                        src="/avatars/avatar2.jpg"
                        alt="Avatar 2"
                        style={{ width: "80px", cursor: "pointer", borderRadius: "10px" }}
                    />
                    </label>


                    <label>
                    <input
                        type="radio"
                        name="avatar"
                        value="/avatars/avatar3.jpg"
                        checked={avatar === "/avatars/avatar3.jpg"}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                        src="/avatars/avatar3.jpg"
                        alt="Avatar 3"
                        style={{ width: "80px", cursor: "pointer", borderRadius: "10px" }}
                    />
                    </label>
                </div>
              </Form.Group>
            </Col>
          </Row>


          <Row className="mt-4">
            <Col>
              <Form.Check 
                type="checkbox"
                label="Aceptar términos y condiciones"
                required
              />
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button 
              variant="light"
              type="submit"
              className="px-5 py-2 fw-bold shadow"
              style={{
                borderRadius: "10px",
                backgroundColor: "#00a3ff",
                color: "white",
                fontSize: "18px"
              }}
            >
              Registrar
            </Button>
          </div>
        </Form>
      </Card>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Usuario registrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Correo:</strong> {email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
};

export default Formulario;
