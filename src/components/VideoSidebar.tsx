import React from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";

type T_props = {
  comment: {
    count: number;
    enabled: boolean;
  };
  reactions: {
    count: number;
    voted: boolean;
  };
};

function VideoSidebar(props: T_props) {
  return (
    <div className="absolute -inset-y-1/3 right-0 flex flex-col text-white space-y-2 px-4 ">
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
    </div>
  );
}

export default VideoSidebar;
