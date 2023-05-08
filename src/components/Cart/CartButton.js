import classes from './CartButton.module.css';
import {  useDispatch, useSelector } from "react-redux";
import { toggleAction } from '../../ReduxStore/UI';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
 
  

  const toggleCartHandler = () => {
    dispatch(toggleAction.cartOpenClose());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
