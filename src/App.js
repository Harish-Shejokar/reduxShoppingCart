import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import { sendCartData,fetchCartData } from "./ReduxStore/Cart-Action";




let isIntial = true;


const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartVisible);
  const CartItems = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])


  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    } 
    if(CartItems.changed)dispatch(sendCartData({ cartItems: CartItems.cartItems, totalQuantity :CartItems.totalQuantity}));
    
  }, [CartItems, dispatch]);

  return (
    <div className="backgroundColor">
      
      { notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </div>
  );
};

export default App;
