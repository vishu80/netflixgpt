import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";
// {
//   //MoviesList-popular
//Horizontal rows -moviesCard*n

//   //movieList-NowPlaying
//   //MoviesList-Trending
//   //MovieList-Horror
// }
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const famousMovies = useSelector((state) => state.movies.famousMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const topRatedmovies = useSelector((state) => state.movies.topRatedMovies);

  console.log(topRatedmovies,'topRated')

  return (
    <div className="bg-black w-screen">
      <div className="-mt-80 relative z-20 pl-12">
        <Movielist title={"Now Playing Movies"} moviesData={movies} />
        <Movielist title={'Popular Movies'} moviesData={famousMovies} />
        <Movielist title={"Upcoming Movies"} moviesData={upcomingMovies} />
        <Movielist title={"Top Rated Movies"} moviesData={topRatedmovies} />

      </div>
    </div>
  );
};

export default SecondaryContainer;
