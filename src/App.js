import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import { uiAction } from "./ReduxStore/UI";
let isIntial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartVisible);
  const CartItems = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
     if (isIntial) {
       isIntial = false;
       return;
     } 
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart data!!",
      })
    );
    const putRequest = async () => {
      
      try {
        const response = await fetch(
          "https://expense-data-11e4b-default-rtdb.firebaseio.com/Cart.json",
          {
            method: "PUT",
            body: JSON.stringify(CartItems),
          }
        );

            if (response.ok) {
          console.log("put ok");
          const data = await response.json();
          // console.log(data);
          dispatch(
            uiAction.showNotification({
              status: "success",
              title: "Success",
              message: "Sending Cart data successfull !!",
            })
          );
        } else {
          console.log("put not ok");
        }
      } catch (error) {
        console.log(error);
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error",
            message: "Sending Cart data FAiled !!",
          })
        );
      }
    };
    putRequest();
  }, [CartItems, dispatch]);

  return (
    <div className="backgroundColor">
      {notification && (
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
