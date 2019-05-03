// Action Types
export const actionTypes = {
   CORRECT_GUESS: 'CORRECT_GUESS',
};

// Action Creators
/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
   return { type: actionTypes.CORRECT_GUESS };
}