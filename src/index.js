import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import sacralReducer from "./store/sacralReducer";
import solarPlexusReducer from "./store/solarPlexusReducer";
import heartReducer from "./store/heartReducer";
import throatReducer from "./store/throatReducer";
import thirdEyeReducer from "./store/thirdEyeReducer";
import crownReducer from "./store/crownReducer";
import { createStore, combineReducers } from "redux";
const reducer = combineReducers({
    root: rootReducer,
    sacral: sacralReducer,
    solarPlexus: solarPlexusReducer,
    heart: heartReducer,
    throat: throatReducer,
    thirdEye: thirdEyeReducer,
    crown: crownReducer,
});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

