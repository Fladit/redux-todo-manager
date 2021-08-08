import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export default store
