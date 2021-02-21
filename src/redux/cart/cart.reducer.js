import CartActionTypes from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'


const INITIAL_STATE = {hidden: true,cartItems: []}

const cartReducer = (state=INITIAL_STATE,action)=>{
  switch (action.type) {
   case CartActionTypes.TOGGLE_CART_HIDDEN:
     return {...state,hidden: !state.hidden}
    break;

    case CartActionTypes.ADD_ITEM:
     return {...state,cartItems: addItemToCart(state.cartItems,action.payload)} /*addItemToCart() vernet array []   action.payload degen object {id,name,price}  */
     /* esli item 2 raza nazhali to quantity: 2 budet, esli 1 raz nazhali, to quantity: 1 budet addItemToCart() poshitaet eto   */
    break;

    case CartActionTypes.REMOVE_ITEM:
      return {...state,cartItems: removeItemFromCart(state.cartItems,action.payload)}

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {...state, cartItems: state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)}
    
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
   default:
    return state
    break;
  }
}

export default cartReducer