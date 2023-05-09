import { uiAction } from "./UI";
import { cartAction } from "./Cart";


export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response =await fetch( `https://expense-data-11e4b-default-rtdb.firebaseio.com/Cart.json`);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = (await response).json();

      return data;
    };

      try {
          const cartData = await fetchRequest();
          console.log(cartData)
          dispatch(
            cartAction.replaceCart({
              cartItems: cartData.cartItems || [],
              totalQuantity: cartData.totalQuantity,
            })
          );
          
    } catch (error) {
      console.log(error);
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching Cart data FAiled !!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart data!!",
      })
    );

    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://expense-data-11e4b-default-rtdb.firebaseio.com/Cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (response.ok) {
          console.log("put ok");
          // const data = await response.json();
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
    sendRequest();
  };
};
