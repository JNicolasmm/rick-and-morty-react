import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import ThunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhacer(applyMiddleware(ThunkMiddleware)))