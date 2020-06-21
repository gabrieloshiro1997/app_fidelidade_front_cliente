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
		this.efetuarResgate = this.efetuarResgate.bind(this);
	}

	efetuarResgate(idRecompensa) {

		this.props.EfetuarResgate(idRecompensa, localStorage.getItem(ID_CLIENTE))
			.then((res) => {
				if (!res.error) {
					this.props.ObterPontuacoes();
					this.props.EsconderModalResgate();
				}
			})
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
										<td className="text-left">{recompensa.pontos} <Button className="float-right btn-sm align-middle" color="success" onClick={() => this.efetuarResgate(recompensa.id)}><i class="fa fa-usd" aria-hidden="true"></i></Button></td>
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