
const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function reducer(state = initalState, action) {

    if (action.type === "ROOT_COUNTER") {
        return {
            ...state,
            rootCounter: state.rootCounter + 1
        }
    }
    console.log(state);
    return state
}
export default reducer;