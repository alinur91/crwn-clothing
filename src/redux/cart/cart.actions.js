import CartActionTypes from './cart.types'

export const toggleCartHidden = ()=>({
 type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item=>({
 type: CartActionTypes.ADD_ITEM,
 payload: item
})

export const removeItem = item =>({
 type: CartActionTypes.REMOVE_ITEM,
 payload: item
})

export const clearItemFromCart = item => ({
 type: CartActionTypes.CLEAR_ITEM_FROM_CART,
 payload: item
})

/* query reference object(bd zapros istegende info kaityp keledi. firestore.doc('/users/:userId'),firestore.collections('/users/'))
2 types of reference objects we can get back, document ref obj and collect ref obj


and the snapshot objects--> documentRef.get() */