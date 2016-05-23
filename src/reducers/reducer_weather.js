import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER : //... is the spread operator. Create a new array, take all of the entries from state and put it into the new array.
            //Never manipulate state in Redux, return a new state.
            return [ action.payload.data, ...state ]//Have multiple cities, so an array
    }
    return state;
}