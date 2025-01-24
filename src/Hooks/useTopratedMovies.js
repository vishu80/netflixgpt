import React, { useEffect } from "react";
import { options, POPULAR_MOVIES_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utlis/MoviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);
      const result = await response.json();

      dispatch(addTopRatedMovies(result.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useTopRatedMovies;