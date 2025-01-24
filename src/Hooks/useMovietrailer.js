import { addMovieId } from "../utlis/MoviesSlice";
import React, { useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { options, POPULAR_MOVIES_URL } from "../utlis/constant";

const useMovieTrailer=(mid)=>{
    const dispatch=useDispatch();

    const fetchMoviesDetial = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${mid}/videos`,
          options
        );
        const data = await response.json();
        const filterData = data.results.filter((item) => item.type == "Trailer");
        const trailer = filterData?.length ? filterData[0] : data.results?.[0];
        dispatch(addMovieId(trailer))
      };
    
      useEffect(() => {
        fetchMoviesDetial();
      }, []);

}

export default useMovieTrailer