import React, { useEffect } from "react";
import { options, POPULAR_MOVIES_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utlis/MoviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options);
      const result = await response.json();

      dispatch(addUpcomingMovies(result.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useUpcomingMovies;