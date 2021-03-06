import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ChkoutArrow,
  ChkoutImageContainer,
  ChkoutImageHolder,
  ChkoutQuantity,
  ChkoutRemoveButton,
  ChkoutText,
  ChkoutValue
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ChkoutImageContainer>
        <ChkoutImageHolder src={imageUrl} alt="item" />
      </ChkoutImageContainer>
      <ChkoutText>{name}</ChkoutText>
      <ChkoutQuantity>
        <ChkoutArrow onClick={() => removeItem(cartItem)}>&#10094;</ChkoutArrow>
        <ChkoutValue>{quantity}</ChkoutValue>
        <ChkoutArrow onClick={() => addItem(cartItem)}>&#10095;</ChkoutArrow>
      </ChkoutQuantity>
      <ChkoutText>${price}</ChkoutText>
      <ChkoutRemoveButton onClick={() => clearItem(cartItem)}>
        &#10008;
      </ChkoutRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
