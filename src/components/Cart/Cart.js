import { cartAction } from '../../ReduxStore/Cart';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartBucket from './CartBucket';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';




const Cart = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.Cart.cartVisible);

  const closeModal = () => {
    dispatch(cartAction.cartOpenClose())
  }
  
  
  return (
    <>
      {cartState && <CartBucket onClick={closeModal} />}
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </Card>
    </>
  );
};

export default Cart;