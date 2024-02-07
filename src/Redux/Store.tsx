// @ts-ignore
import savePhotosReducers from "./Reducers/Images";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  savePhotos: savePhotosReducers,
});

const Store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
  // devTools: process.env.NODE_ENV !== 'production',
})

export default Store
