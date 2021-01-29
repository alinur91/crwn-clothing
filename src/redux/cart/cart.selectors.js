import {createSelector} from 'reselect'

/* input selector is a function that gets the whole state and reutrns slice of it, cart degen {hidden,cartItems:[]} */
const selectCart = state => state.cart


export const selectCartItems = createSelector(
 [selectCart], /* 1st argument is a collection array of input selectors */
 (cart)=> cart.cartItems /* cart degen state.cart. cart.cartItems degen [{id,price,quantity}] */
 /*2nd argument is going to be function that will return the value we want out of the selector. In parameters we get each output of the input selectors in the array  */

)

/* there are 2  types of selectors we can write, the 1st type is called an input selector that doesn't use createSelector, 2nd type is called an output selector that does use input selectors and creates selector to build themselve*/

export const selectCartItemsCount = createSelector(
 [selectCartItems], /* selectCartItems degen vernet cartItems, */
 cartItems => cartItems.reduce((acc,curr)=> acc+curr.quantity,0)
)

/*
v cart-icon.componente vizivaem selectCartItemsCount(state) i natknetsya na eto [selectCartItems] which meanse i need reference  to selectCartItems tama vot eto stoit [selectCart], it gets the cart object and passes to this function (cart)=> cart.cartItems, cartItems suda pass etedi cartItems => cartItems.reduce((acc,curr)=> acc+curr.quantity,0) count beredi v konce i tomendegi itemCountka passes
const mapStateToProps = state =>({itemCount: selectCartItemsCount(state)})
*/