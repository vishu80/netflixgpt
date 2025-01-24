import React, { useEffect } from "react";
import { options, POPULAR_MOVIES_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utlis/MoviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options);
      const result = await response.json();
      console.log(result);

      dispatch(addNowPlayingMovies(result.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default usePopularMovies;
