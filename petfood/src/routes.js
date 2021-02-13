import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Home from './pages/home';

const Routes = () => {
   return (
      <>

         <Router>
            <Route path='/' component={Home} />
            <Route path='/petshop/:id' component={Petshop} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/cadastro' component={Cadastro} />
         </Router>

         <Sidebar />

      </>
   )
}

export default Routes;
