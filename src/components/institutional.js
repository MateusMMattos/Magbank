import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './institutional.scss';

const institutional = () => (
    <section className='institutional text-light py-5'>
        <Container>
            <Row>
                <Col xs={12} lg={5}/>
                <Col xs={12} lg={7}>
                    <h2 className='institutional-title my-5'>Já nascemos digital</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem odio, scelerisque nec felis ac, dapibus tempor risus. Cras viverra fringilla urna, id placerat nulla efficitur ac. Nulla sit amet mollis leo, at finibus nunc. Vestibulum nisi nisi, iaculis sit amet cursus vitae, gravida et enim. Curabitur ac congue lacus. Donec in luctus arcu. Etiam efficitur ac tellus non elementum. Proin in dui leo. Quisque lacinia hendrerit placerat. Curabitur faucibus ante vitae neque tincidunt euismod.</p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default institutional;