import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

import {withRouter} from 'react-router-dom'

import {selectCartItems} from '../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown =({cartItems,history,dispatch})=>{
  return (
 <div className='cart-dropdown'>
   <div className="cart-items">
      {cartItems.length?cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} /> ): <span className='empty-message'>Your cart is empty</span>}
   </div>
   <CustomButton onClick={()=>{
     history.push('/checkout')
     dispatch(toggleCartHidden()) /* connect passes dispatch into our components as a prop if we do not supply a 2nd argument to connect */
     }}>GO TO CHECKOUT</CustomButton>
 </div>
)
}

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems}) /* this make sure cart-dropdown.component is not getting re-rendrered whenever the state changes that unreletaed to the cart items*/
/* withRouter v propsax history.push('/checkout') bar */
// const mapDispatchToProps = dispatch=> dispatch(toggleCartHidden())
/* connect passes dispatch into our components as a prop if we do not supply a 2nd argument to connect */
export default withRouter(connect(mapStateToProps)(CartDropdown))

/* withRouter is just taking the component that got returned from our connect call as its component argument */