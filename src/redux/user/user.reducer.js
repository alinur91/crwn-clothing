const INITIAL_STATE = {
    currentUser: null

}

const userReducer = (lastState=INITIAL_STATE,action) => {
 switch (action.type) {
  case 'SET_CURRENT_USER':
   
   return {
    ...lastState,
    currentUser: action.payload
   };
 
  default:
   return lastState;
 }


}

 export default userReducer
