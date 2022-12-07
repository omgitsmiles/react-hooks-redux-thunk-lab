import React from "react";
import ReactDOM from "react-dom";
import { configureStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleWare from "redux-thunk"
import App from "./App";
import catsReducer from "./features/cats/catsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare))

const store = configureStore(catsReducer, composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
