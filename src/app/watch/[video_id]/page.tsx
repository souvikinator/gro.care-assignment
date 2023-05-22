"use client";
import { T_Post } from "@/app/page";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import ReactPlayer from "react-player";
import { FadeLoader } from "react-spinners";

// @ts-ignore
function Page({ params, searchParams }) {
  const { video_id } = params;
  const posts = useQuery<T_Post[]>(["video"]).data;
  let video;
  if (posts) {
    video = posts.filter((post) => post.postId === video_id)[0] || null;
  }
  return (
    <div>
      {video ? (
        <ReactPlayer url={video?.submission.mediaUrl}></ReactPlayer>
      ) : (
        <FadeLoader color="black" aria-setsize={25} />
      )}
    </div>
  );
}

export default Page;
