import React from "react";
import { userLanguage } from "../utlis/languageConstant";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const prefferedLanguage=useSelector((state)=>state.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={userLanguage[prefferedLanguage].inputBoxPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {userLanguage[prefferedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
