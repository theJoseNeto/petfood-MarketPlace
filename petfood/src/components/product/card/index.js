import './style.css';
const Product_card = () => {
	return (
		<div className="product col-3">
			<img
				src="https://images.tcdn.com.br/img/img_prod/742943/racao_foster_premium_caes_filhotes_7kg_351_1_20200629180249.jpg"
				alt="Saco de ração"
				className="img-fluid align-center" />
			<button className="btn btn-primary rounded-circle">+</button>
			<h4>
				<label className="badge bagge-primary">
					R$90,00
    </label>
			</h4>
			<small>
				<b>Ração x</b>
			</small>
		</div>
	);
}

export default Product_card;
