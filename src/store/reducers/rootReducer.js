import { ROOT_COUNTER } from "../actionTypes";

const initalState = {
    rootCounter: 0,
   
}

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case ROOT_COUNTER: {
            return {
                ...state, 
                rootCounter: action.payload.rootCounter,

            };
        }
        default: 
            return state;
    }
    // if (action.type === "ROOT_COUNTER") {
    //     return {
    //         ...state,
    //         rootCounter: state.rootCounter + 1
    //     }
    // }
    // console.log(state);
    // return state
   
};
export default rootReducer;