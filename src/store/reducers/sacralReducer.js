import { SACRAL_COUNTER } from "../actionTypes";

const initalState = {
    sacralCounter: 0,
    
}

const sacralReducer = (state = initalState, action) => {
    switch (action.type) {
        case SACRAL_COUNTER: {
            return {
                ...state, 
                sacralCounter: action.payload.sacralCounter,

            };
        }
        default: 
            return state;
        }
    };
export default sacralReducer;