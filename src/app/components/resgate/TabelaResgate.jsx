import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { NotificationManager } from 'react-notifications';

import { ObterPontuacoes, DefinirDadosPontuacao } from '../../redux/actions/Pontuacao/PontuacaoActions';
import { ExibirModalResgate } from '../../redux/actions/Resgate/ResgateActions';
import { ObterRecompensas } from '../../redux/actions/Recompensa/RecompensaActions';

class TabelaResgate extends Component {
	constructor(props) {
		super(props);
		this.exibirModal = this.exibirModal.bind(this);
		this.props.ObterPontuacoes();
	}

	exibirModal(pontuacao) {

		this.props.DefinirDadosPontuacao(pontuacao);
		this.props.ObterRecompensas(pontuacao.id)
			.then((res) => {
				if(!res.error) {
					this.props.ExibirModalResgate();
				}
				else {
					NotificationManager.error('Erro ao obter as recompensas', 'Erro');
				}
			});
	}

	render() {
		return (
			<Table responsive>
				<thead>
					<tr className="text-center">
						<th className="text-left">Estabelecimento</th>
						<th className="text-left">Pontuação atual</th>

					</tr>
				</thead>
				<tbody>
					{
						this.props.pontuacoes.map((pontuacao, index) => (
							<tr key={index}>
								<td>{pontuacao.nome_fantasia}</td>
								<td>{pontuacao.valor}</td>
								<td>
									<Button className="float-right" color="success" onClick={() => this.exibirModal(pontuacao)}>Efetuar Resgate<i className="fa fa-plus ml-1"></i></Button>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}
}

const MapStateToProps = (state) => {
	return {
		pontuacoes: state.PontuacaoReducer.pontuacoes
	}
}
export default connect(MapStateToProps, {
	ObterPontuacoes,
	ExibirModalResgate,
	ObterRecompensas,
	DefinirDadosPontuacao
})(TabelaResgate);