import React from "react";
import { BG_IMG } from "../utils/constants";
import languages from "../utils/languages";
import { useSelector } from "react-redux";

export const GPTSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(languages[langKey]);
  return (
    <div>
      <img src={BG_IMG} alt="bg" />
      <div className="absolute bottom-[70%] left-[25%] bg-black p-4 w-6/12">
        <form>
          <input
            type="text"
            placeholder={languages[langKey].searchPlaceholder}
            className="px-4 py-4 w-9/12"
          />
          <button className="bg-red-700 text-white px-4 py-4 w-3/12">
            {languages[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};
