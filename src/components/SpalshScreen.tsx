import React from "react";
import { FadeLoader } from "react-spinners";

function SpalshScreen() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 flex-1">
      <FadeLoader color="#24282F" aria-setsize={20} />
      <p className="text-xl font-medium  flex text-center flex-wrap">
        Loading the gateway to a world of videos and inspiration!
      </p>
    </div>
  );
}

export default SpalshScreen;
