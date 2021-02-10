import {createStore,applyMiddleware,compose} from 'redux'
import logger from 'redux-logger' /* whenever action gets fired or dispatched we can catch them and display them,catches the action it console logs out for us */

import rootReducer from './root-reducer'

import {persistStore} from 'redux-persist' /* yarn add redux-persist */
/* persistStore allows us our browser to cache our store now depending on certain configuration options that we're going to set*/

/* yarn add redux redux-logger react-redux */


const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [] /* logger console-ga shigaradi kazhdiy raz action dispatches current state -ti */

/* yarn add redux redux-logger react-redux */

if(process.env.NODE_ENV ==='development'){
 middlewares.push(logger) /* esli na heroku smotrim to v console ne nuzhen logger */
}

 export const store = createStore(rootReducer,
 composeEnhancers(applyMiddleware(...middlewares))
 )
/* applyMiddleware(logger) */

export const persistor = persistStore(store)
export default {store,persistor}



