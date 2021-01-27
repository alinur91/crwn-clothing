import {SET_CURRENT_USER} from '../types'
/* yarn add redux redux-logger react-redux */
export const setCurrentUser = user=>({
 type: SET_CURRENT_USER,
 payload: user
})