import React from 'react'
import {connect} from 'react-redux'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

import {createStructuredSelector} from 'reselect'

import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg'

const CartIcon = ({toggleCartHidden,itemCount})=>{
 return <div onClick={toggleCartHidden} className="cart-icon">
   <ShoppingIcon className='shopping-icon'/>
   <span className="item-count">{itemCount}</span>
 </div>
}

// const mapDispatchToProps = dispatch =>({
//  toggleCartHidden: ()=> dispatch(toggleCartHidden())
// })
/* mapStateToProps keeps firing when {user:{},cart: {hidden,cartItems}} store changes */
const mapStateToProps = createStructuredSelector({itemCount: selectCartItemsCount})
/* whenever reducer updates {hidden: false,cartItems:[{id,price,quantity}]} mapStateToProps is getting called every single time */

/* we dont wanna rerender if values are the same, RE SELECT allows us to write these selectors in a way that if the properties that pulling fronm the state are the same it wont pass them into component it passes old value and React component not re render */
/* yarn add reselect */
export default connect(mapStateToProps,{toggleCartHidden})(CartIcon)