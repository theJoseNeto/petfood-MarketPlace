import { useState, useEffect } from 'react'
import ProductList from '../product/list';
import './style.css';
import Dock from 'react-dock';

const Sidebar = () => {
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		window.addEventListener('openCart', () => setOpened(true));
	}, []);

	return (
		<Dock position="right" isVisible={opened} onVisibleChange={(visible) => {
			setOpened(visible);
		}}>
			<div className="container-fluid h-100 pt-4 sidebar">
				<h5>Minha sacola</h5>
				<div className="row products">
					{[1, 2, 3, 4, 5, 6, 7].map(p => <ProductList />)}
				</div>

				<footer className="row footer align-items-center">
					<div className="col-12 d-flex justify-content-between align-items-center">
						<b className="d-inline-block">Total: </b>
						<h3>R$ 90,00</h3>
					</div>
					<button className="btn-lg btn btn-block btn-primary rounded-0 h-50 align-items-center">Finalizar</button>
				</footer>
			</div>
		</Dock>
	)
}

export default Sidebar;
