import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import { toast } from "react-hot-toast";
import VideoHeader from "./VideoHeader";

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

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let options = {
      threshold: 0.7,
    };

    // @ts-ignore
    let handlePlay = (entries, observer) => {
      // @ts-ignore
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    if (videoRef.current) observer.observe(videoRef.current);
  });

  return (
    <div className="max-w-lg snap-end rounded-xl shadow-lg relative h-screen">
      <VideoHeader />
      <video
        src={props.videoUrl}
        ref={videoRef}
        onClick={(e) => {
          const isPlaying = !!(
            videoRef.current?.currentTime &&
            videoRef.current?.currentTime > 0 &&
            !videoRef.current?.paused &&
            !videoRef.current?.ended &&
            videoRef.current?.readyState > 2
          );
          if (isPlaying) {
            setIsPlaying(false);
            videoRef.current?.pause();
            toast("paused", { position: "bottom-center", icon: "⏸️" });
          } else {
            setIsPlaying(true);
            videoRef.current?.play();
          }
        }}
        className={`bg-gradient-to-t  from-black rounded-xl h-full`}
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
