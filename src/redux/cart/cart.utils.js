export const addItemToCart = (cartItems,cartItemToAdd)=>{
 /* cartItems degen array [{id,quantity,price}], cartItemToAdd degen object {id,quantity,price} */
 const existingCartItem = cartItems.find(cart=>cart.id === cartItemToAdd.id)

 if(existingCartItem){
  return cartItems.map(cart=>cart.id === existingCartItem.id?{...cart,quantity: cart.quantity+1}:cart)
 }
/* esli item 2 raza nazhali to quantity: 2 budet, esli 1 raz nazhali, to vnizy */
 return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove) =>{
  const existingCartItem = cartItems.find(cart=> cart.id === cartItemToRemove.id)

  if(existingCartItem.quantity === 1) {
   return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map(cartItem=> cartItem.id === cartItemToRemove.id? {...cartItem,quantity: cartItem.quantity-1} : cartItem)
}