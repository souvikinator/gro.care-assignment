import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import Link from "next/link";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import VideoFooter from "./VideoFooter";

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
  description: string;
};

function VideoCard(props: T_VideoCardProps) {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });
  const [playing, setIsPlaying] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    if (inView) {
      // @ts-ignore
      videoRef.current.play();
    } else {
      // @ts-ignore
      videoRef.current.pause();
    }
  }, [inView]);

  const setRefs = useCallback(
    (node: any) => {
      videoRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <div className=" w-full h-screen snap-end rounded-lg shadow-lg relative">
      {/* <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={props.thumbnailUrl}
        /> */}
      <video src={props.videoUrl} ref={setRefs} loop autoPlay></video>
      <VideoFooter
        creator={props.creator.handle}
        description={props.description}
        profileImage={props.creator.profileImageUrl}
        title={props.title}
      />
    </div>
  );
}

export default VideoCard;
