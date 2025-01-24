import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, moviesData }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-6 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
