import { THIRDEYE_COUNTER } from "../actionTypes";

const initalState = {
    thirdEyeCounter: 0,
    
}

const thirdEyeReducer = (state = initalState, action) => {
    switch (action.type) {
        case THIRDEYE_COUNTER: {
            return {
                ...state, 
                thirdEyeCounter: action.payload.thirdEyeCounter,

            };
        }
        default: 
            return state;
        }
    };

export default thirdEyeReducer;