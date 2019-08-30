/******************************************************************************
* Parker Howell
* 8/16/2018
* reducerHelper.js
* These helper functions assist our reducer in "reducers.js" to ultimatly 
* return a new state. 
******************************************************************************/



/******************************************************************************
* toggleIsSorted   - helper for sort()
* This function toggles our isSortedAZ state property. Input of "true" returns
* "false". Input of "false" returns "true".
******************************************************************************/
const toggleIsSorted = (isSorted) => {
	if (isSorted)
		return false;
	else
		return true;
};


/******************************************************************************
* sortWords   - helper for sort()
* This function is used to sort the words in our Glossary. If the words are 
* unsorted, or sorted Z - A, they will then be sorted as A - Z. If they are 
* sorted A - Z they will be sorted Z - A. 
******************************************************************************/
const sortWords = (state) => {
	if (state.isSortedAZ)
		state.words.sort(function(a, b) {
			if(a.english < b.english) { return 1; }
    		if(a.english > b.english) { return -1; }
    		return 0;
		});
	else
		state.words.sort(function(a, b) {
			if(a.english < b.english) { return -1; }
    		if(a.english > b.english) { return 1; }
    		return 0;
		});

	return state.words;
}


/******************************************************************************
* isUnique   - helper for removeDuplicates()
* This function checks if argument word is unique compared to the values 
* already stored in the argument newWords array. If our word is NOT in newWords
* the word is unique, and "true" is returned. If our word IS in newWords, the 
* word is not unique, and "false" is returned. 
 ******************************************************************************/
const isUnique = (newWords, word) => {
	let ind = 0;
	for (ind; ind < newWords.length; ind++){
		if (newWords[ind].english === word.english &&
			newWords[ind].french === word.french){
			return false;
		}
	}
	return true;
}


/******************************************************************************
* removeDuplicates   - helper for remDup()
* This function checks if argument word is unique compared to the values 
* already stored in the argument newWords array. If our word is NOT in newWords
* the word is unique, and "true" is returned. If our word IS in newWords, the 
* word is not unique, and "false" is returned. 
 ******************************************************************************/
const removeDuplicates = (words) => {
	let index = 0;
	let newWords = [];

	for (index; index < words.length; index++)
		if (isUnique(newWords, words[index]))
			newWords.push(words[index]);

	return newWords;
}


/******************************************************************************
* sort   - helper for reducer where action.type === "SORT_CLICKED"
* This function creates a new state Object and updates it with a toggled 
* isSortedAZ value, and a sorted (based on isSortedAZ value) array of words for
* the Glossary. 
 ******************************************************************************/
export const sort = (state) => {
	let newState = Object.assign({}, state, 
		{ isSortedAZ: toggleIsSorted(state.isSortedAZ) },
		{ words: sortWords(state) }
		);
 	return newState; 
};



/******************************************************************************
* remDup   - helper for reducer where action.type === "REM_DUP_CLICKED"
* This function creates a new state Object and updates it by removing duplicate
* values. Duplicates are where both the "english" and "french" words in a word
* Object match the "english" and "french" words of another word Object.
 ******************************************************************************/
export const remDup = (state) => {
	let newState = Object.assign({}, state, 
		{ words: removeDuplicates(state.words) }
		);
 	return newState; 
};


