import { createSlice } from "@reduxjs/toolkit";

const MoviesReducer=createSlice({
    name:'Movies',
    initialState:{
        nowPlayingMovies:null,
        movieId:null,
        famousMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:((state,action)=>{
            state.nowPlayingMovies=action.payload

        }),
        addMovieId:((state,action)=>{
            state.movieId=action.payload
        }),

        addFamousMovies:((state,action)=>{
            state.famousMovies=action.payload

        }),
        addTopRatedMovies:((state,action)=>{
            state.topRatedMovies=action.payload

        }),
        addUpcomingMovies:((state,action)=>{
            state.upcomingMovies=action.payload

        })
    }
})
export const {addNowPlayingMovies,addMovieId,addFamousMovies,addTopRatedMovies,addUpcomingMovies}=MoviesReducer.actions
export default MoviesReducer.reducer