import React from "react";
import { Row, Col, Form, Image, Button } from "react-bootstrap";

import './Login.scss';

import Logo from '../assets/MAGbank.svg';

const Login = () => (
    <section className="login">
        <div className="login_container">
            <Row>
                <Col className="text-center text-light ">
                    <Image src={Logo} className='mb-5'/>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número da Conta</Form.Label>
                            <Form.Control type="number"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                            <Button variant="success" type="submit">
                            Criar Conta
                            </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    </section>
);

export default Login;