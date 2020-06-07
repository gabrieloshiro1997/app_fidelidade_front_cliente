import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import CardHome from '../global/Card';
import { ObterPontuacoes } from '../../redux/actions/Pontuacao/PontuacaoActions';
class Home extends Component {
	constructor(props) {
		super(props);
		this.props.ObterPontuacoes();
	}
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
						{
							this.props.pontuacoes.map((pontuacao, index) => (
								<CardHome classeCor="info" quantidade={pontuacao.valor} empresa={pontuacao.nome_fantasia} icone="icon-user" />
							))
						}
				</Row>
			</div>

		)
	}
}

const MapStateToProps = (state) => {
	return {
		pontuacoes: state.PontuacaoReducer.pontuacoes
	}
}
export default connect(MapStateToProps, { ObterPontuacoes })(Home)