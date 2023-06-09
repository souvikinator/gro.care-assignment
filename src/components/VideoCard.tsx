import React from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import Link from "next/link";

type T_VideoCardProps = {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  comment: {
    count: number;
    enabled: boolean;
  };
  reactions: {
    count: number;
    voted: boolean;
  };
  creator: {
    handle: string;
    profileImageUrl: string;
  };
};

function VideoCard(props: T_VideoCardProps) {
  return (
    <div className="my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <Link href={`/watch/${props.videoId}`}>
        <article className="overflow-hidden rounded-lg shadow-lg relative">
          {/* TODO: thumbnail */}
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={props.thumbnailUrl}
          />
          <div className="absolute bottom-0 left-0 right-0 flex w-full p-2 md:p-4 bg-gradient-to-t  from-black">
            <div className="">
              <img
                alt="Placeholder"
                className="block rounded-full w-10"
                src={props.creator.profileImageUrl}
              />
            </div>
            <div className="ml-2 w-full text-white">
              <p className="ml-2 text-xl font-semibold">{props.title}</p>
              <p className="ml-2 text-md ">{props.creator.handle}</p>
              <div className="ml-2 flex items-center space-x-4">
                <span className="flex items-center text-md space-x-2">
                  {props.reactions.voted ? <BsFillHeartFill /> : <BsHeart />}
                  <p className="">{props.reactions.count}</p>
                </span>
                {props.comment.enabled && (
                  <span className="flex items-center text-md space-x-2">
                    <BiCommentDots />
                    <p className="">{props.comment.count}</p>
                  </span>
                )}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default VideoCard;
