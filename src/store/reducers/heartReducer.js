import { HEART_COUNTER } from "../actionTypes";

const initalState = {
    heartCounter: 0,
    
}

const heartReducer = (state = initalState, action) => {
    switch (action.type) {
        case HEART_COUNTER: {
            return {
                ...state, 
                heartCounter: action.payload.heartCounter,

            };
        }
        default: 
            return state;
        }
    };

export default heartReducer;