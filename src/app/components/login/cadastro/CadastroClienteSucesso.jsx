import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import '../css/Login.css';

export default class CadastroClienteSucesso extends Component {
    render() {
    return (
      <div className="app flex-row align-items-center bg-image">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <CardGroup>
				<Card className="bg-light py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>O cadastro da sua conta foi efetuado com sucesso</h2>
                      <p>Um email foi enviado com o login e a senha para você poder acessar o sistema.</p>

					  <div className="text-center">
						<Link to="/Login">
							<Button color="primary" width='50' className="mt-3" active tabIndex={-1}>Ir para a página de login</Button>
						</Link>
					  </div>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}