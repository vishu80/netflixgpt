import React, { useEffect } from "react";
import { options } from "../utlis/constant";
import useMovieTrailer from "../Hooks/useMovietrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ mid }) => {
  useMovieTrailer(mid)
  const movieId=useSelector((state)=>state.movies.movieId)
 
  return (
    <div >
      <iframe
      className="w-screen aspect-video"
        // width="560"
        // height="315"
        src={`https://www.youtube.com/embed/`+movieId?.key+'?&autoplay=1&mute=1'}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
