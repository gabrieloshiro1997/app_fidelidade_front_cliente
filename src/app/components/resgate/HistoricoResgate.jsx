import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Row, Col, Card, CardBody } from 'reactstrap';
import { ObterHistoricoResgateClientePorEstabelecimento } from '../../redux/actions/Resgate/ResgateActions';

class HistoricoRecompensas extends Component {
	constructor(props) {
		super(props);

		this.props.ObterHistoricoResgateClientePorEstabelecimento(this.props.idEstabelecimentoSelecionado)
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
									<th className="text-left">Pontos gastos</th>
									<th className="text-left">Data de retirada</th>
								</tr>
							</thead>
							<tbody>
								{this.props.historicoResgate.map((resgate, index) => (
									<tr key={index} className="text-center align-middle">
										<td className="text-left">{resgate.descricao}</td>
										<td className="text-left">{resgate.pontos_gastos}</td>
										<td className="text-left">{resgate.data_retirada}</td>
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
	historicoResgate: state.ResgateReducer.historicoResgate,
	idEstabelecimentoSelecionado: state.ResgateReducer.idEstabelecimentoSelecionado
})
export default connect(MapStateToProps, { ObterHistoricoResgateClientePorEstabelecimento })(HistoricoRecompensas);