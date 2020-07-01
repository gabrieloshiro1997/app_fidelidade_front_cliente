import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'reactstrap';
import { ObterHistoricoPontuacaoClientePorEstabelecimento } from '../../redux/actions/Pontuacao/PontuacaoActions';

import { formatarData } from '../../../config/utils/helper';
class HistoricoPontuacao extends Component {
	constructor(props) {
		super(props);
		this.props.ObterHistoricoPontuacaoClientePorEstabelecimento(this.props.idEstabelecimentoSelecionado);
	}

	render() {
		return (
			<>
				<Row>
					<Col>
						<Table responsive>
							<thead>
								<tr className="text-center">
									<th className="text-left">Descrição</th>
									<th className="text-left">Pontuação</th>
									<th className="text-left">Data de registro</th>
								</tr>
							</thead>
							<tbody>
								{this.props.historicoPontuacao.map((pontuacao, index) => (
									<tr key={index} className="text-center align-middle">
										<td className="text-left">{pontuacao.descricao}</td>
										<td className="text-left">{pontuacao.valor}</td>
										<td className="text-left">{formatarData(pontuacao.data_pontuacao)}</td>
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
	historicoPontuacao: state.PontuacaoReducer.historicoPontuacao,
	idEstabelecimentoSelecionado: state.ResgateReducer.idEstabelecimentoSelecionado
})
export default connect(MapStateToProps, { ObterHistoricoPontuacaoClientePorEstabelecimento })(HistoricoPontuacao);