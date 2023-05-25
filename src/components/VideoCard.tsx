import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

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

  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      threshold: 0.7,
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className=" w-full h-screen snap-end rounded-lg shadow-lg relative">
      {/* <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={props.thumbnailUrl}
        /> */}
      <video
        src={props.videoUrl}
        ref={videoRef}
        onClick={(e) => {
          // @ts-ignore
          const isPlaying = !!(
            videoRef.current?.currentTime > 0 &&
            !videoRef.current?.paused &&
            !videoRef.current?.ended &&
            videoRef.current?.readyState > 2
          );
          if (isPlaying) {
            setIsPlaying(false);
            videoRef.current.pause();
            console.log("pause...");
          } else {
            setIsPlaying(true);
            videoRef.current.play();
            console.log("play...");
          }
        }}
        className={`bg-gradient-to-t  from-black opacity-70
        `}
        loop
      ></video>
      <VideoSidebar comment={props.comment} reactions={props.reactions} />
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
