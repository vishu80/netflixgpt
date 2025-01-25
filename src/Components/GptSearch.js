import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { IMAGE_BACKGROUND_URL } from "../utlis/constant";
//      Gpt Search Bar
//GPT movies suggestion this component content
const GptSearch = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <img
          src={IMAGE_BACKGROUND_URL}
          alt="bckground"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
