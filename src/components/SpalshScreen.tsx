import React from "react";
import { FadeLoader } from "react-spinners";

function SpalshScreen() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 h-full">
      <FadeLoader color="#24282F" aria-setsize={25} />
      <p className="text-xl font-medium text-white flex text-center flex-wrap">
        Loading the gateway to a world of videos and inspiration!
      </p>
    </div>
  );
}

export default SpalshScreen;
