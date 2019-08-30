/******************************************************************************
* Parker Howell
* 8/16/2018
* reducers.js
* This reducer recieves an action and then returns a new state based on the 
* action recieved. Helper functions, sort() and remDup() are located in 
* "./reducerHelpers". If the "action.type" doesn't match our two cases, the 
* original state is returned.
******************************************************************************/


import { sort, remDup } from "./reducerHelpers";

let reducer = (state, action) => {
  switch(action.type) {
  	case "SORT_CLICKED":
  		return sort(action.payload);
  		break;

  	case "REM_DUP_CLICKED":
  		return remDup(action.payload);
  		break;

  	default:
  		return state;
  }
};

export default reducer;
