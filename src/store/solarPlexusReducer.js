const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function solarPlexusReducer(state = initalState, action) {

    if (action.type === "SOLARPLEXUS_COUNTER") {
        return {
            ...state,
            solarPlexusCounter: state.solarPlexusCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default solarPlexusReducer;