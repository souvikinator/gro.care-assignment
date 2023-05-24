import React, { useEffect } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import Link from "next/link";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

type T_VideoCardProps = {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
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
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      console.log(inView);
    }
  }, [inView]);

  return (
    <div className="my-3 w-full h-screen snap-end">
      {/* <Link href={`/watch/${props.videoId}`}> */}
      <article className="rounded-lg shadow-lg relative">
        {/* <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={props.thumbnailUrl}
        /> */}
        <video
          className=" h-auto w-full"
          src={props.videoUrl}
          ref={ref}
        ></video>
        <div className="absolute bottom-0 left-0 right-0 flex w-full p-5 md:p-4 bg-gradient-to-t  from-black">
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
      {/* </Link> */}
    </div>
  );
}

export default VideoCard;
