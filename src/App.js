import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import Loading from 'react-fullscreen-loading';

import './App.scss';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./app/components/login/Login'));
const CadastroCliente = React.lazy(() => import('./app/components/login/cadastro/CadastroCliente'));
const CadastroClienteSucesso = React.lazy(() => import('./app/components/login/cadastro/CadastroClienteSucesso'));

const MapStateToProps = state => {    
  return {
      ...state.GlobalReducer
  }
};

const Loader = connect(MapStateToProps)((props) => (
  <Loading 
    loading={props.carregando} 
    background="rgba(4, 4, 4, 0.58)" 
    loaderColor="#FFFFFF" />
));

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={loading()}>
      <Switch>
		<Route exact path="/Login" name="Login" render={props => <Login {...props}/>} />
        <Route exact path="/Cadastro" name="Cadastro de Cliente" render={props => <CadastroCliente {...props}/>} />
        <Route exact path="/Cadastro/Sucesso" name="Cadastro do cliente efetuado com sucesso" render={props => <CadastroClienteSucesso {...props}/>} />
        
		<Route path="/" render={props => <DefaultLayout {...props}/>} />
        <Loader />  
      </Switch>
      <Loader />
      <NotificationContainer />
    </React.Suspense>
  </BrowserRouter>
)

export default App;
