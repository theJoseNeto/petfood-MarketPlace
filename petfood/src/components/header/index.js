import Logo from '../../assets/logo.png';
import LogoGreen from '../../assets/logo-green.png';
import { Link } from 'react-router-dom';
import '../header/style.css';
const Header = ({ logoWhiteVersion, hideCart }) => {

	const openDrawer = () => {
		const event = new CustomEvent('openCart');
		window.dispatchEvent(event);
	}
	return (
		<div class='col-12'>
			<header>
				<Link to="/">
					<img src={logoWhiteVersion ? Logo : LogoGreen} class="img-fluid logo" />
				</Link>
			</header>

			{!hideCart && <button
				onClick={() => openDrawer()}
				className="btn btn-secondary cart-button"
			>
				<span className="mdi mdi-cart"></span> 2 itens
            </button>}
		</div>
	);
}

export default Header;
