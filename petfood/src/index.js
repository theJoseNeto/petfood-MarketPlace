import React from 'react';
import ReactDOM from 'react-dom';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import './styles/global.css';

ReactDOM.render(
	<React.StrictMode>
		<Home />
		<Sidebar />
	</React.StrictMode>,
	document.getElementById('root')
);
