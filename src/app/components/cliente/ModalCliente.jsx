import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Container,
	Row,
	Col,
	FormGroup,
	Label,
	Button
} from 'reactstrap';
import { NotificationManager } from 'react-notifications';
import { addMaskCpf, removeMaskCpf } from '../../../config/utils/helper';

import { Form, Text, RadioGroup, Radio } from 'informed';

import { EsconderModalEditarCliente, AtualizarCliente } from '../../redux/actions/Cliente/ClienteActions';

class ModalCliente extends Component {
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
		let cpf = removeMaskCpf(data.cpf);
		let email = data.email;
		let acessoUsuario = acessoUsuarioCliente;
		let dataNascimento = data.data_nasc;
		let sexo = data.sexo;
		
		if (!nome || !cpf || !email || !dataNascimento || !sexo) {
			NotificationManager.warning('Preencha todos campos!', 'Atenção');
			return;
		}

		let usuario = {
			id: this.props.usuario.id ? this.props.usuario.id : null,
			nome,
			cpf,
			email,
			acessoUsuario,
			dataNascimento,
			sexo
		};

		this.props.AtualizarCliente(usuario)
			.then((res) => {
				if (res.type !== "ATUALIZAR_CLIENTE_FAIL") {
					this.props.EsconderModalEditarCliente();
				}
			}
			)
	}

	render() {
		return (
			<>
				<Modal size="md" isOpen={this.props.exibirModalEditarCliente} backdrop={true} toggle={() => this.props.EsconderModalEditarCliente()}>
					<ModalHeader toggle={() => this.props.EsconderModalEditarCliente()}>
						Editar Dados
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row className="justify-content-center">
								<Col>
									<Form getApi={this.setFormApi} initialValues={this.props.usuario}>
										<Row>
											<Col>
												<FormGroup>
													<Label htmlFor="nome">Nome</Label>
													<Text className="form-control" field="nome" id="nome" placeholder="Digite seu nome" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup>
													<Label htmlFor="cpf">CPF</Label>
													<Text className="form-control" field="cpf" id="cpf" disabled placeholder="Digite seu CPF" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup>
													<Label htmlFor="email">E-mail</Label>
													<Text className="form-control" field="email" id="email" disabled placeholder="Digite seu e-mail" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup>
													<Label htmlFor="data_nasc">Data de Nascimento</Label>
													<Text type="date" className="form-control" field="data_nasc" id="data_nasc" placeholder="Data sua data de nascimento" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
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
								</Col>
							</Row>
						</Container>
					</ModalBody>
					<ModalFooter>
						<Button color="success" width='50' className="mt-3" active tabIndex={-1} onClick={() => this.salvarCliente()}>Salvar</Button>
					</ModalFooter>
				</Modal>
			</>
		)
	}
}
const MapStateToProps = state => {
	return {
		exibirModalEditarCliente: state.ClienteReducer.exibirModalEditarCliente,
		usuario: {
			...state.ClienteReducer.usuario,
			cpf: addMaskCpf(state.ClienteReducer.usuario.cpf)

		}
	}
}

export default connect(MapStateToProps, { EsconderModalEditarCliente, AtualizarCliente })(ModalCliente)