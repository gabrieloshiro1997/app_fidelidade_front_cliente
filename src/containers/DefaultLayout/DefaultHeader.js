import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Logout } from '../../app/redux/actions/Login/LoginActions';
import { ExibirModalEditarCliente, ObterDadosUsuario } from '../../app/redux/actions/Cliente/ClienteActions'; 
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { ID_CLIENTE } from '../../config/utils/LocalStorageKeys';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

	logout(e) {
		e.preventDefault();
		this.props.Logout();
		this.props.history.push('/Login');
	}

	exibirModal() {
		let id = localStorage.getItem(ID_CLIENTE);
		this.props.ObterDadosUsuario(id)
		.then(() => {
			this.props.ExibirModalEditarCliente();
		});
	}
	render() {

		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
				//   full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
				//   minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
				/>
				<AppSidebarToggler className="d-md-down-none" display="lg" />
				<Nav className="ml-auto" navbar>
					<UncontrolledDropdown nav direction="down">
						<DropdownToggle nav>
							<i class="fa fa-cog fa-lg" aria-hidden="true"></i>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem header tag="div" className="text-center"><strong>Opções</strong></DropdownItem>
							<DropdownItem onClick={() => this.exibirModal()}><i class="fa fa-user-circle" aria-hidden="true"></i>Editar Perfil</DropdownItem>
							<DropdownItem header tag="div" className="text-center align-middle">
								<Link
									id="btnSair"
									to="/Login"
									onClick={this.props.Logout}
									style={{
										'text-decoration': 'none',
										'color': '#000000'
									}}>
									<i id="icon-logout" class="fa fa-sign-out fa-lg mr-2" aria-hidden="true"></i>
								Sair
								</Link>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default connect(null, { Logout, ExibirModalEditarCliente, ObterDadosUsuario })(DefaultHeader);
