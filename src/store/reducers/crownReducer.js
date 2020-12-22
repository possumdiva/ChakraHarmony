import { CROWN_COUNTER } from "../actionTypes";

const initalState = {
    crownCounter: 0,
    
}

const crownReducer = (state = initalState, action) => {
    switch (action.type) {
        case CROWN_COUNTER: {
            return {
                ...state, 
                crownCounter: action.payload.crownCounter,

            };
        }
        default: 
            return state;
        }
    };
export default crownReducer;