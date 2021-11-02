import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataFetched from "./dataFetched";
import location from "./location";

const reducer = combineReducers({ dataFetched, location });

const store = configureStore({ reducer });

export default store;
