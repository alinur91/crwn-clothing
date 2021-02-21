import UserActionTypes from './user.types'

const INITIAL_STATE={currentUser:null,error: null}

/* yarn add redux redux-logger react-redux */
export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
   case UserActionTypes.SIGN_IN_SUCCESS:
    return {...state,currentUser: action.payload,error: null}
    break; /* action.payload degen {currentUser: {id:123,email: 123,displayNmae: 133,createdAt: 123}}  */
  /* every single reducer gets every single action that ever gets fired,even if those actions are not related to this reducer */
  case UserActionTypes.SIGN_OUT_SUCCESS:
    return {...state, currentUser: null,error: null}
  case UserActionTypes.SIGN_IN_FAILURE:
  case UserActionTypes.SIGN_OUT_FAILURE:
  case UserActionTypes.SIGN_UP_FAILURE:
    return {
        ...state,
        error: action.payload
    }
   default:
    return state
    break;
  }

}