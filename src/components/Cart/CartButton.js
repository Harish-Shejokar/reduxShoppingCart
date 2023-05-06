import classes from './CartButton.module.css';
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from '../../ReduxStore/Cart';

const CartButton = (props) => {
   const dispatch = useDispatch();
 
  

  const cartHandler = () => {
    dispatch(cartAction.cartOpenClose());
  }

  return (
    <button  className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
