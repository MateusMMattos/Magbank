import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faMobileScreenButton, faGlobe, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const IconText = () => (
  <Row>
    <Col xs={12} lg={6} className="mb-4">
      <Row>
        <Col xs={2} className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faMobileScreenButton} size="2x" color="#ffff" />
        </Col>
        <Col xs={10} className="h5 text-muted">
          Sem fila e sem burocracia
        </Col>
      </Row>
    </Col>
    <Col xs={12} lg={6} className="mb-4">
      <Row>
        <Col xs={2} className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faMobileButton} size="2x" color="#ffff" />
        </Col>
        <Col xs={10} className="h5 text-muted">
          Simples e prático
        </Col>
      </Row>
    </Col>
    <Col xs={12} lg={6} className="mb-4">
      <Row>
        <Col xs={2} className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faGlobe} size="2x" color="#ffff" />
        </Col>
        <Col xs={10} className="h5 text-muted">
          Abertura de conta 100% online
        </Col>
      </Row>
    </Col>
    <Col xs={12} lg={6} className="mb-4">
      <Row>
        <Col xs={2} className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faShieldHalved} size="2x" color="#ffff" />
        </Col>
        <Col xs={10} className="h5 text-muted">
          Transações mais seguras
        </Col>
      </Row>
    </Col>
  </Row>
);

export default IconText;