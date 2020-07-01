import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Container,
	Card,
	CardBody,
	CardHeader,
	FormGroup,
	Label,
	Col,
	Row,
	Button,
	CardFooter,
} from 'reactstrap';
import { Form, Text, RadioGroup, Radio } from 'informed';

import { NotificationManager } from 'react-notifications'

import { CadastrarCliente } from '../../../redux/actions/Cliente/ClienteActions';
import '../css/Login.css';

class CadastroCliente extends Component {
	constructor(props) {
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	salvarCliente() {
		let data = this.formApi.getValues();
		let acessoUsuarioCliente = 3;

		let nome = data.nome;
		let cpf = data.cpf;
		let email = data.email;
		let acessoUsuario = acessoUsuarioCliente;
		let dataNascimento = data.data_nascimento;
		let sexo = data.sexo;


		if (!nome || !cpf || !email || !dataNascimento || !sexo) {
			NotificationManager.warning('Preencha todos campos!', 'Atenção');
			return;
		}
		
		if (!(/[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}/.test(cpf)) || cpf.length !== 11) {
			NotificationManager.warning('Digite um cpf válido!', 'Atenção');
			return;
		}

		let usuario = {
			nome,
			cpf,
			email,
			acessoUsuario,
			dataNascimento,
			sexo
		};

		this.props.CadastrarCliente(usuario)
			.then((res) => {
				if (res.type !== "CADASTRAR_CLIENTE_FAIL") {
					this.props.history.push('/Cadastro/Sucesso');
				}
			}
			)
	}

	render() {
		return (
			<div className="animated fadeIn">
				<div className="app flex-row align-items-center bg-image">
					<Container>
						<Row className="justify-content-center">
							<Col xs="8" sm="8">
								<Card>
									<CardHeader>
										<strong>Cadastrar Cliente</strong>
									</CardHeader>
									<CardBody>
										<Form getApi={this.setFormApi} initialValues={this.props.usuario}>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="nome">Nome</Label>
														<Text className="form-control" field="nome" id="nome" placeholder="Digite seu nome" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="cpf">CPF</Label>
														<Text className="form-control" field="cpf" id="cpf" placeholder="Digite seu CPF" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="email">E-mail</Label>
														<Text type="email" className="form-control" field="email" id="email" placeholder="Digite seu e-mail" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="data_nascimento">Data de Nascimento</Label>
														<Text type="date" className="form-control" field="data_nascimento" id="data_nascimento" placeholder="Data sua data de nascimento" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<Label htmlFor="sexo">Sexo</Label>
													<FormGroup>
														<RadioGroup field="sexo" id="sexo">
															<label>Masculino<Radio className="align-middle ml-1" value="M" /></label>
															<label className="ml-2">Feminino<Radio className="align-middle m-1" value="F" /></label>
														</RadioGroup>
													</FormGroup>
												</Col>
											</Row>
										</Form>
									</CardBody>
									<CardFooter>
										<div className="text-right">
											<Button onClick={() => this.salvarCliente()} color="primary" width='50' className="mt-3" active tabIndex={-1}>Realizar cadastro</Button>
										</div>
									</CardFooter>
								</Card>
							</Col>
						</Row>
						<div className="text-center">
							<Link to="/Login">
								<Button color="info" width='50' className="mt-3" active tabIndex={-1}>Voltar</Button>
							</Link>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

export default connect(null, { CadastrarCliente })(CadastroCliente);
