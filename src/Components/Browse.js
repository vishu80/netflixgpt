import React,{useEffect} from 'react'
import Header from './Header'
import usePopularMovies from '../Hooks/userPopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useFamousMovies from '../Hooks/useFamousMovies'
import useTopRatedMovies from '../Hooks/useTopratedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'


const Browse = () => {
usePopularMovies()
useFamousMovies();
useTopRatedMovies();
useUpcomingMovies();
  return (
    <div>
      {/* Browser */}
      <Header/>

      <MainContainer/>

      <SecondaryContainer/>

    </div>
  )
}

export default Browse
