import './style.css';
const ProductList = () => {
   return (
      <div className="col-12 product-list">
         <div className="row">
            <div className="col-3">
               <img src="https://images.tcdn.com.br/img/img_prod/742943/racao_foster_premium_caes_filhotes_7kg_351_1_20200629180249.jpg" alt="produto" className="img-fluid" />
            </div>
            <div className="col-6">
               <small>
                  <h6>
                  <label className="badge-primary">
                        $30,00
                  </label>
                  </h6>
               </small>
                  <b>Product Name</b>
            </div>
            <div className="col-3">
               <button type="submit" className="btn btn-lg btn-secondary rounded-circle" >-</button>
            </div>
         </div>
      </div>
   );
}
export default ProductList;
