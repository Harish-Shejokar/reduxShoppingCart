import React, { } from 'react';
import classes from './CartModal.module.css';



const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.onClick} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </React.Fragment>
  );
};

export default CartModal;