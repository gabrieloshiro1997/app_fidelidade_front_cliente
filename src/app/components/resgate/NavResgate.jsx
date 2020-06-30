import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import TabelaRecompensas from './TabelaRecompensas';
import HistoricoPontuacao from './HistoricoPontuacao';
import HistoricoResgate from './HistoricoResgate';

const NavResgate = (props) => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => { toggle('1'); }}
					>
						Resgate
          			</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => { toggle('2'); }}
					>
						Histórico de Resgate
          			</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '3' })}
						onClick={() => { toggle('3'); }}
					>
						Histórico de Pontuação
          			</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<TabelaRecompensas />
				</TabPane>
				<TabPane tabId="2">
					<HistoricoResgate />
				</TabPane>
				<TabPane tabId="3">
					<HistoricoPontuacao />
				</TabPane>
			</TabContent>
		</div>
	);
}

export default NavResgate;