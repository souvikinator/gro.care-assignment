import React, { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function VideoPlayer({ src }: { src: string }) {
  const [inViewRef, inView] = useInView();
  const videoRef = useRef();

  useEffect(() => {
    if (inView) {
      console.log(videoRef.current);
      // @ts-ignore
      videoRef.current.play();
    } else {
      // @ts-ignore
      videoRef.current.pause();
    }
  }, [inView]);

  const setRefs = useCallback(
    (node: any) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <div className="snap-end">
      <video src={src} ref={setRefs} controls loop></video>
    </div>
  );
}

export default VideoPlayer;
