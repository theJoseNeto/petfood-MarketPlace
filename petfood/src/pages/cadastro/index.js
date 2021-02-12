import Ilustration from '../../assets/ilustration.png';
import Header from '../../components/header';
const Cadastro = () => {

	return (
		<div className="container-fluid h-100 primary-color">
			<div className="row">
				<Header logoWhiteVersion hideCart />
				<div className="col-6 my-auto">
					<img src={Ilustration} className="ilustration img-fluid" />
					<p><a href='https://br.freepik.com/vetores/familia'>Art by: catalyststuff</a></p>
				</div>
				<div className="col-6">
					<div className="box col-8">
						<h2 className="text-center">Falta pouco pro seu pet ser feliz</h2>
						<input type="text" className="form-control form-constrol-lg mb-3" placeholder="Nome completo " />
						<input type="text" className="form-control form-constrol-lg mb-3" placeholder="E-mail " />
						<input type="text" className="form-control form-constrol-lg mb-3" placeholder="Telefone" />
						<input type="text" className="form-control form-constrol-lg mb-3" placeholder="CPF" />
						<input type="Date" className="form-control form-constrol-lg mb-3" placeholder="Data de nascimento" />
						<button className="btn btn-block btn-lg btn-secondary secondary-color">FINALIZAR PEDIDO</button>
					</div>
				</div>
			</div>

		</div>
	);

}
export default Cadastro;
