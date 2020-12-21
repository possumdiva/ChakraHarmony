const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function sacralReducer(state = initalState, action) {

    if (action.type === "SACRAL_COUNTER") {
        return {
            ...state,
            sacralCounter: state.sacralCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default sacralReducer;