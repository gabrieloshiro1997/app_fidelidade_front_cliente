import React, { Component } from 'react';
import { 
	Col,
	Card,
	CardBody
} from 'reactstrap';
export default class CardHome extends Component {
    render(){
        return(
			<Col xs="12" sm="8" lg="4">
				<Card className={"text-white bg-" + this.props.classeCor}>
				<CardBody className="pb-0">
					<div className="text-value">{this.props.empresa}</div>
					<h5 className="mt-20">{this.props.saldo} Pontos</h5>
				</CardBody>
				<div className="chart-wrapper mx-3" style={{ height: '70px' }}>
				</div>
				</Card>
			</Col>

        )
    }
}