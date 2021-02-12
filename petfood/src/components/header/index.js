import Logo from '../../assets/logo.png';
import LogoGreen from '../../assets/logo-green.png';
import '../header/style.css';
const Header = ({ logoWhiteVersion, hideCart }) => {

	const openDrawer = () => {
		const event = new CustomEvent('openCart');
		window.dispatchEvent(event);
	}
	return (
		<div class='col-12'>
			<header>
				<img src={logoWhiteVersion ? Logo : LogoGreen} class="img-fluid logo" />
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
