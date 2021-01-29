import userReducer from '../user/user.reducer'
import cartReducer from '../cart/cart.reducer'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger' /* whenever action gets fired or dispatched we can catch them and display them,catches the action it console logs out for us */

const middlewares = [logger] /* logger console-ga shigaradi kazhdiy raz action dispatches current state -ti */

/* yarn add redux redux-logger react-redux */
export default ()=>{

 const store = createStore(combineReducers({
  user: userReducer,
  cart: cartReducer
  /* userReducer degen {currentUser: {id:12312,email: 123@gmail.com,displayName: 'asd',createdAt:123} } */
 }),
 applyMiddleware(...middlewares)
 )
/* applyMiddleware(logger) */
 return store
}