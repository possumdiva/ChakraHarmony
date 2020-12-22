import { THROAT_COUNTER } from "../actionTypes";

const initalState = {
    throatCounter: 0,
    
}

const throatReducer = (state = initalState, action) => {
    switch (action.type) {
        case THROAT_COUNTER: {
            return {
                ...state, 
                throatCounter: action.payload.throatCounter,

            };
        }
        default: 
            return state;
        }
    };

export default throatReducer;