import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CardHome from '../global/Card';

export default class Home extends Component {
    render(){
        return(
			<div className="animated fadeIn">
				<Row>
					<>
						<CardHome classeCor="info" quantidade="1" tipoCard="Sua pontuação" icone="icon-user" />
						<CardHome classeCor="info" quantidade="1" tipoCard="Sua pontuação" icone="icon-user" />
						<CardHome classeCor="info" quantidade="1" tipoCard="Sua pontuação" icone="icon-user" />
						<CardHome classeCor="info" quantidade="1" tipoCard="Sua pontuação" icone="icon-user" />
					</>
				</Row>
            </div>

        )
    }
}