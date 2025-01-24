import React, { useEffect } from 'react'
import { API_KEY } from '../utlis/constant'
import VideoBackGround from './VideoBackGround'

const VideoTitle = ({title,overview}) => {

  useEffect(()=>{
    fetchVideoofMovies()
  },[title])

  const fetchVideoofMovies=async ()=>{
    const title1='Inception official trailer'
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(title1)}&type=video&key=${API_KEY}`;
  const response=await fetch(url)
  const data=response.json();
  console.log('API Response:', data); // Log the full API response for debugging

  if (data?.items?.length > 0) {
    const videoId = data.items[0].id.videoId;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log(videoUrl); // Use this link to play the video
} else {
    console.log("No trailer found.");
}

  }
  return (
    <div className='w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80'>
          Play
        </button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
