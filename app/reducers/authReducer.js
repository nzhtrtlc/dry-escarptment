import {initialState} from './initialState';

const reducer = (state = initialState.auth ,action) => {
  switch(action.type){
      case 'LOGIN':
          return {
              ...state,
              loggedIn : true
          };
      case 'LOGOUT' :
          return {
              ...state,
              loggedIn : false
          };
      default:
          return state;
  }
};

export default reducer;