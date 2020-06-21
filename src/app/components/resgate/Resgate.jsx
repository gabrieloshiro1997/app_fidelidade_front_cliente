import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import TabelaResgate from './TabelaResgate'
import ModalResgate from './ModalResgate';

export default class Resgate extends Component {
	render() {
		return (
			<>
				<Col xs="12" lg="12">
					<Card>
						<CardHeader>
							<big id="titulo-header-componente">Lista de Estabelecimentos</big>
						</CardHeader>
						<CardBody>
							<TabelaResgate />
						</CardBody>
					</Card>
				</Col>
				<ModalResgate />
			</>
		)
	}
}