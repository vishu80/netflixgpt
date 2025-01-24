import React, { useEffect } from "react";
import { options, POPULAR_MOVIES_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addFamousMovies } from "../utlis/MoviesSlice";

const useFamousMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options);
      const result = await response.json();

      dispatch(addFamousMovies(result.results));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useFamousMovies;