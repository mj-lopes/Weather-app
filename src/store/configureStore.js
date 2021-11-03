import { configureStore, combineReducers } from "@reduxjs/toolkit";
import nextDaysPrevision from "./nextDaysPrevision";
import todayPrevision from "./todayPrevision";

const reducer = combineReducers({ nextDaysPrevision, todayPrevision });

const store = configureStore({ reducer });

export default store;
