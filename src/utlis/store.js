import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MoviesReducer from './MoviesSlice'
import gptRedeucer from './GptsearchSlice';
import configReducer from './configSlice' 
const Appstore = configureStore({
  reducer: {
    user: userSlice,
    movies:MoviesReducer,
    gpt:gptRedeucer,
    config:configReducer
  },
});

export default Appstore;
