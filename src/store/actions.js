import { ROOT_COUNTER, SACRAL_COUNTER, SOLARPLEXUS_COUNTER, HEART_COUNTER, THROAT_COUNTER, THIRDEYE_COUNTER, CROWN_COUNTER } from "./actionTypes";

export const setRoot = (rootCounter) => {
    return {
        type: ROOT_COUNTER, 
        payload: {
            rootCounter,
        },
    };
};
export const setSacral = (sacralCounter) => {
    return {
        type: SACRAL_COUNTER, 
        payload: {
            sacralCounter,
        },
    };
};
export const setSolarPlexus = (solarPlexusCounter) => {
    return {
        type: SOLARPLEXUS_COUNTER, 
        payload: {
            solarPlexusCounter,
        },
    };
};
export const setHeart = (heartCounter) => {
    return {
        type: HEART_COUNTER, 
        payload: {
            heartCounter,
        },
    };
};
export const setThroat = (throatCounter) => {
    return {
        type: THROAT_COUNTER, 
        payload: {
            throatCounter,
        },
    };
};
export const setThirdEye = (thirdEyeCounter) => {
    return {
        type: THIRDEYE_COUNTER, 
        payload: {
            thirdEyeCounter,
        },
    };
};
export const setCrown = (crownCounter) => {
    return {
        type: CROWN_COUNTER, 
        payload: {
            crownCounter,
        },
    };
};

