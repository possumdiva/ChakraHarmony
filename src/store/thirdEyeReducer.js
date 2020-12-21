const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function thirdEyeReducer(state = initalState, action) {

    if (action.type === "THIRDEYE_COUNTER") {
        return {
            ...state,
            thirdEyeCounter: state.thirdEyeCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default thirdEyeReducer;