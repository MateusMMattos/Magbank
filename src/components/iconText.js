import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faMobileScreenButton, faGlobe, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import './iconText.scss';

const IconText = () => (
  <Row>
    <Col xs={12} lg={6} className="mb-4">
      <Row className='py-3'>
        <Col xs={2} className="d-flex justify-content-center icon_Institutional">
          <FontAwesomeIcon icon={faMobileScreenButton} color="#ffff" />
        </Col>
        <Col xs={10} className="h6 px-0 text_institutional" color='#ffff'>
          Sem fila e sem burocracia
        </Col>
      </Row>
      <Row className='py-3'>
        <Col xs={2} className="d-flex justify-content-center icon_Institutional">
          <FontAwesomeIcon icon={faMobileButton} color="#ffff" />
        </Col>
        <Col xs={10} className="h6 px-0 text_institutional" color='#ffff'>
          Simples e prático
        </Col>
      </Row>
      <Row className='py-3'>
        <Col xs={2} className="d-flex justify-content-center icon_Institutional">
          <FontAwesomeIcon icon={faGlobe} color="#ffff" />
        </Col>
        <Col xs={10} className="h6 px-0 text_institutional" color='#ffff'>
          Abertura de conta 100% online
        </Col>
      </Row>
      <Row className='py-3'>
        <Col xs={2} className="d-flex justify-content-center icon_Institutional">
          <FontAwesomeIcon icon={faShieldHalved} color="#ffff"/>
        </Col>
        <Col xs={10} className="h6 px-0 text_institutional" color='#ffff'>
          Transações mais seguras
        </Col>
      </Row>
    </Col>
  </Row>
);

export default IconText;