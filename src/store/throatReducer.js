const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function throatReducer(state = initalState, action) {

    if (action.type === "THROAT_COUNTER") {
        return {
            ...state,
            throatCounter: state.throatCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default throatReducer;