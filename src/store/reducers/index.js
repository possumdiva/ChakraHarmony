import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import sacralReducer from "./sacralReducer";
import solarPlexusReducer from "./solarPlexusReducer";
import heartReducer from "./heartReducer";
import thirdEyeReducer from "./thirdEyeReducer";
import throatReducer from "./throatReducer";
import crownReducer from "./crownReducer";

export default combineReducers({
    root: rootReducer, 
    sacral: sacralReducer,
    solarPlexus: solarPlexusReducer,
    heart: heartReducer,
    throat: throatReducer,
    thirdEye: thirdEyeReducer,
    crown: crownReducer
})

