import Header from '../../components/header';
import ProductList from '../../components/product/list';
import './style.css'

const Checkout = () => {
   return (
      <div className="h-100">
         <Header hideCart />
         <div className="container mt-4">
            <div className="row">
               <div className="col-6">
                  <span className="section-title mb-10">Dados de entrega</span>

                  <div className="row mb-3">
                     <div className="col-12">
                        <input type="text" placeholder="Digite seu CEP" className="form-control fomr-control-lg" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-6">
                        <input type="text" placeholder="Cidade" className="form-control fomr-control-lg" />
                     </div>
                     <div className="col-6 pl-0">
                        <input type="text" placeholder="logradouro" className="form-control fomr-control-lg" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-3">
                        <input type="text" placeholder="Número" className="form-control fomr-control-lg" />
                     </div>
                     <div className="col-5 pl-0">
                        <input type="text" placeholder="Bairro" className="form-control fomr-control-lg" />
                     </div>
                     <div className="col-4 pl-0">
                        <input type="text" placeholder="UF" className="form-control fomr-control-lg" />
                     </div>
                  </div>

                  <span className="section-title mb-10">Dados de pagamento</span>

                  <div className="row mb-3">
                     <div className="col-12">
                        <input type="text" className="form-control fomr-control-lg" placeholder="N° do cartão" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-6">
                        <input type="text" placeholder="Validade" className="form-control fomr-control-lg" />
                     </div>

                     <div className="col-6 pl-0">
                        <input type="text" placeholder="CVV" className="form-control fomr-control-lg" />
                     </div>

                  </div>
                  <div className="row mb-3">
                     <div className="col-6">
                        <input type="text" placeholder="Nome do tirular" className="form-control fomr-control-lg" />
                     </div>

                     <div className="col-6 pl-0">
                        <input type="text" placeholder="CPF/CNPJ" className="form-control fomr-control-lg" />
                     </div>

                  </div>
                  <div className="row mt-4">
                     <div className="col-12">
                        <b>Total: </b>
                        <h3>R$ 00,00</h3>
                     </div>
                     <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg btn-block col-12">
                           Finalizar
                                </button>
                     </div>
                  </div>
               </div>

               <div className="col-6 box-right">
                  <div className="box col mb-4">
                     <h6>Minha sacola de compras</h6>
                     <div className="row products">
                        {[1, 2, 3, 4, 5, 6, 7].map(p => <ProductList />)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Checkout;
