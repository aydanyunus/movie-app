import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {movieSlice} from './features/movieSlice';

const rootReducer = combineReducers({
    movie: movieSlice
});

export const store = configureStore({
    reducer: rootReducer
})