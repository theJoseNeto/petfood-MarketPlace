import Header from '../../components/header/index';
import Product_card from '../../components/product/card';
import './style.css';
const Petshop = () => {
   return (
      <div className="h-100">
         <Header />
         <div className="container">
            <div className="row">
               <div className="col-2">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAllBMVEVaHoL////vSYOtj8HWx+DOvNri1+lnMIyWcK+QaKv8+/2/qM91Q5bd0eXDrdK4nsmlhbvv6vPKttf39PmGWqPr5PBwPJOzl8XPP4J+T52ceLRgH4Hz7/ZfJYXGstR4JoKFKoFuI4GNY6jBO4J+UJ6QLYJsNo/lRYKhf7jUxN+uNoK5OYLWQoKadbKOLIKTbK2eMYLJPYNddzWVAAADvUlEQVR4nO2XaXeqMBCGA4ggoLiAuGuta5dr+///3IVMEhaBVrmnnt7zPl/M5mTeJDMJjAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAjZhaQvvRbtyAZ3CWovr7BHS4x5olqhDw4/znAubrp/mPu0RR6TG2i8xhFOQ7xyc/brxIf5k9JAGRYWyTek7AfqLHvMQSNq9vR11/fUpapzSBNLHltT5VrHd/aPqzQyMB5NH7tE2FwSzt2nY1gTmllpam6BUEzJ914rhXpT9xu0fDL8JmyGurpLgzpa3WtrEAf6Q8i2RPlHqrOaevBEivc2zijnbqspKTOGw7GfsRuxvtCps6jHxrVC9gU+a/fozPU5+PGZFRUYnvkUve/OofChiNk/ag2HypFVC6Abq+Z+xA4ym6yIAbR5dTMG80FTDoRUMnsxri/Ld9V0RH4mZ1EB/LBbwqp/1kvKXEuFQKXV9MtFhWuvgtAWaSJjzy1Tmow8pD+p3KSSBXptFy//VJ3DWjBUotxcUlrRU/lwGV7UYCQtIvNvYiD6tJY4Zqk6sEzCsEfMaDLDLqqfGx21ulnMls0WskQCZPU273igRQEj8rNZU7UHOExChDrbsnM0SXzPeyau4UIPK8WPhVLlwlrToB1UEsE05XrnvIVAhkWTQS4ImazWtnFcNZ2nUCqtNovPB0yRyE28lR7F2bdxoJ2Ima2oHzjQLYpEzABw0jd2dsIYSU7kAzAf2cR5Gcod3K4NcKWFdugLxTzB3/aaULFWbNDxsJCK3MTFpH5r6rG77mNfpxLWAt/zbgS+zz0fxRQlru9blEgBYmYWzTYXUsmftG/P680BIdUoWnIPCKAthn0f8/ahJy3ZHGlSSe+3dnbn7H7kOdwbC7ECU3aRentOsb4tF4TloParh7JWBeCIN9Osk0PeriaqEzpLVdY0W5NbzT/7K3EH+fjxeFVv5CSrPTtQA2/6zwX76iE8SFa4V581rhS+RWAVlzHeoI8s8tMfG2RgCbv6Txu8nNop62jnzyjEc583e/5YQAW31cOPLTgwWZKZyObJ051QLiXPRG/k+e8rOMpaH02ewNMv732d3I9TXI3aGXdlmG2JiBn/nq89xQCegNEs4Zc3wTjh9X08ijl/n2Wp7EO3fhelfjbxfAlsHJMMaFXq/T73duM79+fvn2l/1he+rb06/H1ZE74b8RCHg0EPBoIODRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjGX7OdLsv8wvXGAAAAAElFTkSuQmCC" alt="logo do petshop" className="img-fluid petshop-image" />
                  <b>PetLove</b>
                  <div className="petshop-infos">
                     <span className="mdi mdi-star" id="classification"></span>
                     <text>
                        <b>
                           4.5
                        </b>
                     </text>
                     <span className="mdi mdi-cash-usd-outline"></span>
                     <text>$$$</text>
                     <span className="mdi mdi-crosshairs-gps"></span>
                     <text>2.9km</text>
                  </div>
                  <label className="badge badge-primer">
                     Frete Grátis
                  </label>
               </div>
               <div className="col-10">
                  <h5>Produtos</h5>
                  <div className="row ">
                     {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => <Product_card />)}
                  </div>
               </div>
            </div>
         </div>
      </div>


   )
}
export default Petshop;
