import userReducer from '../user/user.reducer'
import cartReducer from '../cart/cart.reducer'
import directoryReducer from '../directory/directory.reducer'
import shopReducer from '../shop/shop.reducer'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist' /* yarn add redux-persist */
import storage from 'redux-persist/lib/storage' /*we get localstorage  */
const persistConfig = {key: 'root',storage,whitelist: ['cart']}


const rootReducer = combineReducers({
  user: userReducer, /* userReducer handled by firebase authentication,there is no reason to persist this */
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
  /* userReducer degen {currentUser: {id:12312,email: 123@gmail.com,displayName: 'asd',createdAt:123} } */
 })

export default  persistReducer(persistConfig,rootReducer)