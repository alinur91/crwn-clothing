export const addItemToCart = (cartItems,cartItemToAdd)=>{
 /* cartItems degen array [{id,quantity,price}], cartItemToAdd degen object {id,quantity,price} */
 const existingCartItem = cartItems.find(cart=>cart.id === cartItemToAdd.id)

 if(existingCartItem){
  return cartItems.map(cart=>cart.id === existingCartItem.id?{...cart,quantity: cart.quantity+1}:cart)
 }
/* esli item 2 raza nazhali to quantity: 2 budet, esli 1 raz nazhali, to vnizy */
 return [...cartItems,{...cartItemToAdd,quantity:1}]
}