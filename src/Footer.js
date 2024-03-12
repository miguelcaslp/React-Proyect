import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const Footer = () => {
  
  return (
    <footer className="bg-dark text-light py-4 sticky-botton">
      <Container>
        <Row>
        <Col sm={2}>
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled d-flex justify-content-between ">
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </Col>
          <Col sm={6}>
            <h5>Contacto</h5>
            <p>Dirección: Av. de la Constitución, 14, 14550 Montilla, Córdoba</p>
            <p>Teléfono: (34) 666 25 25 25</p>
          </Col>
          <Col sm={4}>
            <h5>Acerca de Nosotros</h5>
            <p>Bienvenido a SofaSeduction, tu destino definitivo para encontrar el sofá perfecto para tu hogar! En SofaSavvy, nos dedicamos a ofrecerte una amplia selección de sofás de alta calidad que no solo son cómodos, sino que también agregan estilo y elegancia a tu espacio.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
