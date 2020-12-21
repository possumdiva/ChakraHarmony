const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function crownReducer(state = initalState, action) {

    if (action.type === "CROWN_COUNTER") {
        return {
            ...state,
            crownCounter: state.crownCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default crownReducer;