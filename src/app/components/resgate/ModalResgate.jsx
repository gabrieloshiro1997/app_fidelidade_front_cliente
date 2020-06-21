import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { connect } from 'react-redux';

import TabelaRecompensas from './TabelaRecompensas';
import { EsconderModalResgate } from '../../redux/actions/Resgate/ResgateActions';

class ModalResgate extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<Modal isOpen={this.props.showModalResgate} onClick={() => this.props.EsconderModalResgate()}>
					<ModalHeader toggle={() => this.props.EsconderModalResgate()}>
						Resgatar Recompensa
					</ModalHeader>
					<ModalBody>
						<TabelaRecompensas />
					</ModalBody>
				</Modal>
			</>
		)
	}
}
const MapStateToProps = state => {
	return {
		showModalResgate: state.ResgateReducer.showModalResgate
	}
}

export default connect(MapStateToProps, { EsconderModalResgate })(ModalResgate)