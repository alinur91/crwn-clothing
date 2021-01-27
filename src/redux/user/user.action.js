import {UserActionTypes} from './user.types'
/* yarn add redux redux-logger react-redux */
export const setCurrentUser = user=>({
 type: UserActionTypes.SET_CURRENT_USER,
 payload: user
})