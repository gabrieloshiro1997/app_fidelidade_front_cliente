import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { LoginUsuario } from '../../redux/actions/Login/LoginActions';
import './css/Login.css';

class Login extends Component {
    constructor(props){
        super(props);

        this.handleEnterPress = this.handleEnterPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            email: '',
            senha: ''
        }
    }

    handleChangeEmail(e){
        this.setState({
            ...this.state,
            email: e.target.value
        });
    }

    handleChangeSenha(e){
        this.setState({
            ...this.state,
            senha: e.target.value
        });
    }

    login(e){
        e.preventDefault();
        
        if(!this.state.email){
            NotificationManager.warning('Insira o email', 'Preencha os campos');
            return;
        }

        if(!this.state.senha){
            NotificationManager.warning('Insira a senha', 'Preencha os campos');
            return;
        }

        this.props.LoginUsuario(this.state.email, this.state.senha)
        .then((res) => {
			if(res.type === "LOGIN_SUCCESS") {
				this.props.history.push('/Home');
			}
		});


    }
    handleEnterPress(event) {
      if (event.key === 'Enter') {
          this.login();
      }
    }

    onSubmit(e){
      e.preventDefault()
      this.login(e);
	}
	
    render() {
		return (
			<div className="app flex-row align-items-center bg-image">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
										<Form onSubmit={(e) => this.onSubmit(e)}>
											<h1>Login</h1>
											<p className="text-muted">Faça login em sua conta</p>
											<InputGroup className="mb-3">
												<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-user"></i>
												</InputGroupText>
												</InputGroupAddon>
												<Input onChange={(e) => this.handleChangeEmail(e)}type="text" placeholder="Email" autoComplete="email" />
											</InputGroup>
											<InputGroup className="mb-4">
												<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-lock"></i>
												</InputGroupText>
												</InputGroupAddon>
												<Input onChange={(e) => this.handleChangeSenha(e)} type="password" placeholder="Senha" autoComplete="current-password" />
											</InputGroup>
											<Row>
												<Col xs="6">
												<Button onClick={(e) => this.login(e)} color="primary" className="px-4">Login</Button>
												</Col>
												<Col xs="6" className="text-right">
												<Link to="/EsqueciMinhaSenha">
													<Button color="link" className="px-0" >Esqueci minha senha</Button>
												</Link>
												</Col>
											</Row>
										</Form>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
					<div className="text-center">
						<Link to="/Cadastro">
							<Button className="mt-3" color="success" width="50" >Realizar Cadastro</Button>
						</Link>
					</div>
				</Container>
				<NotificationContainer />
			</div>
		);
 	}
}

export default connect(null, { LoginUsuario })(Login)
