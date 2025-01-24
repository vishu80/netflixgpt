import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MoviesReducer from './MoviesSlice' 
const Appstore = configureStore({
  reducer: {
    user: userSlice,
    movies:MoviesReducer
  },
});

export default Appstore;
