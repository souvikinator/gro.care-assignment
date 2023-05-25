import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import { toast } from "react-hot-toast";

type T_RollVideoCardProps = {
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
  shareUrl: string;
};

function RollVideoCard(props: T_RollVideoCardProps) {
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
    <div className="max-w-md h-screen snap-end rounded-lg shadow-lg relative">
      {/* <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={props.thumbnailUrl}
        /> */}
      <video
        src={props.videoUrl}
        ref={videoRef}
        onClick={(e) => {
          const isPlaying = !!(
            videoRef.current?.currentTime > 0 &&
            !videoRef.current?.paused &&
            !videoRef.current?.ended &&
            videoRef.current?.readyState > 2
          );
          if (isPlaying) {
            setIsPlaying(false);
            videoRef.current.pause();
            toast("paused", { position: "bottom-center", icon: "⏸️" });
          } else {
            setIsPlaying(true);
            videoRef.current.play();
          }
        }}
        className={`bg-gradient-to-t  from-black opacity-80 rounded-xl h-full
        `}
        loop
      ></video>
      <VideoSidebar
        comment={props.comment}
        reactions={props.reactions}
        shareUrl={props.shareUrl}
      />
      <VideoFooter
        creator={props.creator.handle}
        description={props.description}
        profileImage={props.creator.profileImageUrl}
        title={props.title}
      />
    </div>
  );
}

export default RollVideoCard;
