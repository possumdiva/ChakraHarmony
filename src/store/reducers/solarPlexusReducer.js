import { SOLARPLEXUS_COUNTER } from "../actionTypes";

const initalState = {
    solarPlexusCounter: 0,
    
}

const solarPlexusReducer = (state = initalState, action) => {
    switch (action.type) {
        case SOLARPLEXUS_COUNTER: {
            return {
                ...state, 
                solarPlexusCounter: action.payload.solarPlexusCounter,

            };
        }
        default: 
            return state;
        }
    };

export default solarPlexusReducer;