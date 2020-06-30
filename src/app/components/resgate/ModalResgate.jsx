import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import NavResgate from '../resgate/NavResgate';
import { EsconderModalResgate } from '../../redux/actions/Resgate/ResgateActions';

class ModalResgate extends Component {
	render() {
		return (
			<>
				<Modal size="xl" isOpen={this.props.showModalResgate} backdrop={true} toggle={() => this.props.EsconderModalResgate()}>
					<ModalHeader toggle={() => this.props.EsconderModalResgate()}>
						Resgatar Recompensa
					</ModalHeader>
					<ModalBody>
						<NavResgate />
					</ModalBody>
					<ModalFooter>

					</ModalFooter>
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