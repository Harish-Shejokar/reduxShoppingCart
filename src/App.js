import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import "./App.css";
import { useSelector } from "react-redux";



function App() {
  const showCart = useSelector((state) => state.toggle.cartVisible);
 
  return (
    <div className="backgroundColor">
      <Layout>
        {showCart &&  <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
