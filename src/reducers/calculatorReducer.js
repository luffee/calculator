import * as types from '../actions';
import initialState from './initialState';


export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {

        case types.NUMBER_CLICK:
            let tempCurrentlyTyped = state.currentlyTyped;
            let tempPrevioslyTyped = state.previouslyTyped;
            if (tempCurrentlyTyped === '0') {
                tempCurrentlyTyped = '';
            }

            return Object.assign({}, state, {
                formula: state.formula + action.number,
                currentlyTyped: tempCurrentlyTyped + action.number,
                previouslyTyped: state.cu
            });

        case types.CLEAR_CLICK:
            return Object.assign({}, state, initialState);

        default:
            return state;

    }
}