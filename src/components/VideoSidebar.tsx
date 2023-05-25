import React, { useEffect, useState } from "react";
import { BsFillHeartFill, BsHeart, BsFillShareFill } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

type T_props = {
  comment: {
    count: number;
    enabled: boolean;
  };
  reactions: {
    count: number;
    voted: boolean;
  };
  shareUrl: string;
};

function VideoSidebar(props: T_props) {
  return (
    <div className="absolute -inset-y-1/2 right-0 flex flex-col text-white space-y-2 px-4">
      <div className="flex flex-col items-center">
        {props.reactions.voted ? (
          <BsFillHeartFill size={40} />
        ) : (
          <BsHeart size={40} />
        )}
        <p>{props.reactions.count}</p>
      </div>
      {props.comment.enabled && (
        <div className="flex flex-col items-center">
          <BiCommentDots size={40} />
          <p>{props.reactions.count}</p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.shareUrl);
            toast.success("copied to clipboard", {
              position: "bottom-center",
            });
          }}
        >
          <BsFillShareFill size={35} />
        </button>
      </div>
    </div>
  );
}

export default VideoSidebar;
