import {all,call,takeLatest,put} from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import {clearCart} from './cart.actions'


export function* clearCartOnSignOut(){
 yield put(clearCart()) /* method kogda SIGN_OUT budet */
}

export function* onSignOutSuccess(){
 yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut) /* listener for SIGN_OUT_SUCCESS,signout bolganda,clearCartOnSignOut invoke,cartItems: [] za4istim  */
}


export function* cartSagas(){
 yield all (  [
  call(onSignOutSuccess)
 ] )
}