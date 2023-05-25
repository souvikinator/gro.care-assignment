import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function VideoPlayer({ src }: { src: string }) {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });
  const [playing, setIsPlaying] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef && videoRef.current) {
      const video: HTMLVideoElement = videoRef.current;
      var isPlaying =
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > video.HAVE_CURRENT_DATA;
      setIsPlaying(isPlaying);
    }
  }, [videoRef]);

  useEffect(() => {
    if (inView) {
      if (!playing) {
        // @ts-ignore
        videoRef.current.play();
        console.log("playing");
      }
    } else {
      if (playing) {
        // @ts-ignore
        videoRef.current.pause();
        console.log("pause");
      }
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
    <div className="snap-start">
      <video src={src} ref={setRefs} controls loop muted></video>
    </div>
  );
}

export default VideoPlayer;
