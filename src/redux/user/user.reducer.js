import {UserActionTypes} from './user.types'

const INITIAL_STATE={currentUser:null}

/* yarn add redux redux-logger react-redux */
export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
   case UserActionTypes.SET_CURRENT_USER:
    return {...state,currentUser: action.payload}
    break; /* action.payload degen {currentUser: {id:123,email: 123,displayNmae: 133,createdAt: 123}}  */
  /* every single reducer gets every single action that ever gets fired,even if those actions are not related to this reducer */
   default:
    return state
    break;
  }

}