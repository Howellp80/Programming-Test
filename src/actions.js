/******************************************************************************
* Parker Howell
* 8/16/2018
* actions.js
* These actions are fired based on button onClick events, and trigger the 
* appropriate reducer in "reducers.js"
******************************************************************************/


// action for when "Sort" button is clicked
export const clickSort = (payload) => {
	return {
		type: "SORT_CLICKED",
		payload
	}
};

// action for when "Remove Duplicate" button is clicked
export const clickRemDup = (payload) => {
	return {
		type: "REM_DUP_CLICKED",
		payload
	}
};



