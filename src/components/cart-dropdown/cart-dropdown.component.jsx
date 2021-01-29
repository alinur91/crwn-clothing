import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

import {selectCartItems]} from '../../redux/cart/cart.selectors'

import {connect} from 'react-redux'

const CartDropdown =({cartItems})=>(
 <div className='cart-dropdown'>
   <div className="cart-items">
      {cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} /> )}
   </div>
   <CustomButton>GO TO CHECKOUT</CustomButton>
 </div>
)

const mapStateToProps = state=>({cartItems: selectCartItems(state)}) /* this make sure cart-dropdown.component is not getting re-rendrered whenever the state changes that unreletaed to the cart items*/

export default connect(mapStateToProps)(CartDropdown)