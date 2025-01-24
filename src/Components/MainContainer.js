import React, { useEffect, useState } from 'react'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import { options } from '../utlis/constant'
import usePopularMovies from '../Hooks/userPopularMovies'
const MainContainer = () => {
  usePopularMovies();
const movies=useSelector((state)=>state.movies.nowPlayingMovies);

if(!movies)
    return 
const mainMovies=movies?.[0];
// setImdbid(movies?.Search[0].imdbID)


  
  return (
    <div>
      <VideoTitle title={mainMovies?.title} overview={mainMovies?.overview}/>

      <VideoBackGround mid={mainMovies?.id}/>
    </div>
  )
}

export default MainContainer
