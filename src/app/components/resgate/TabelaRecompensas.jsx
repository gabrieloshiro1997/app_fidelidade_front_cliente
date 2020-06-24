import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Row, Col, Card, CardBody } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

import { ID_CLIENTE } from '../../../config/utils/LocalStorageKeys';
import { ObterPontuacoes } from '../../redux/actions/Pontuacao/PontuacaoActions';
import { EsconderModalResgate, EfetuarResgate } from '../../redux/actions/Resgate/ResgateActions';

class TabelaRecompensas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idRecompensaSelecionada: 0
		}
		this.efetuarResgate = this.efetuarResgate.bind(this);
		this.exibirBotaoConfirmar = this.exibirBotaoConfirmar.bind(this);
		this.esconderBotaoConfirmar = this.esconderBotaoConfirmar.bind(this);
	}

	efetuarResgate(idRecompensa) {

		this.props.EfetuarResgate(idRecompensa, localStorage.getItem(ID_CLIENTE))
			.then((res) => {
				if (!res.error) {
					this.props.ObterPontuacoes();
					this.props.EsconderModalResgate();
					NotificationManager.success("Recompensa resgatada com sucesso!", "Sucesso");
				}
			})
	}

	exibirBotaoConfirmar(idRecompensaSelecionada) {
		this.setState({
			idRecompensaSelecionada
		});
	}

	esconderBotaoConfirmar() {
		this.setState({
			idRecompensaSelecionada: 0
		});
	}

	render() {
		return (
			<>
				<Row>
					<Col xs="12">
						<Card>
							<CardBody>
								<p><b>Estabelecimento:</b> {this.props.dadosPontuacao.nomeFantasia}</p>
								<p><b>Pontuação atual:</b> {this.props.dadosPontuacao.valor}</p>
							</CardBody>
						</Card>

					</Col>
				</Row>
				<Row>
					<Col>
						<Table responsive>
							<thead>
								<tr className="text-center">
									<th className="text-left">Descrição</th>
									<th className="text-left">Pontos necessários</th>
								</tr>
							</thead>
							<tbody>
								{this.props.recompensas.map((recompensa, index) => (
									<tr key={index} className="text-center align-middle">
										<td className="text-left">{recompensa.descricao}</td>
										<td className="text-left">{recompensa.pontos}
											{this.state.idRecompensaSelecionada == recompensa.id && 
												<div class="btn-group btn-sm float-right" role="group">
													<button class="btn btn-sm btn-success" onClick={() => this.efetuarResgate(recompensa.id)}>Confirmar</button>
													<button class="btn btn-sm btn-danger" onClick={() => this.esconderBotaoConfirmar()}>Cancelar</button>
												</div>
											}

											{this.state.idRecompensaSelecionada != recompensa.id  &&
												<Button className="float-right btn-sm align-middle" color="success" onClick={() => this.exibirBotaoConfirmar(recompensa.id)}>Resgatar</Button>
											}
										</td>
									</tr>
								))
								}
							</tbody>
						</Table>
					</Col>
				</Row>
			</>
		)
	}
}

const MapStateToProps = state => ({
	recompensas: state.RecompensaReducer.recompensas,
	dadosPontuacao: state.PontuacaoReducer.dadosPontuacao
})
export default connect(MapStateToProps,
	{
		ObterPontuacoes,
		EfetuarResgate,
		EsconderModalResgate
	})(TabelaRecompensas);