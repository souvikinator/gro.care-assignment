"use client";
import VideoCard from "@/components/VideoCard";
import { fetchVideos } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

export type T_Post = {
  postId: string;
  creator: {
    name: string;
    id: string;
    handle: string;
    pic: string;
  };
  comment: {
    count: number;
    commentingAllowed: boolean;
  };
  reaction: {
    count: number;
    voted: boolean;
  };
  submission: {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
    hyperlink: string;
    placeholderUrl: string;
  };
};

export default function Home() {
  const [pageNo, setPageNo] = useState(0);
  const { isLoading, isError, data } = useQuery<T_Post[]>(["video"], () =>
    fetchVideos(pageNo)
  );

  console.log(data);

  return (
    <main className="overflow-y-auto ">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {isLoading && <FadeLoader color="#24282F" aria-setsize={25} />}
        {isError && (
          <p className="p-5 bg-red-300 rounded-lg text-red-950">
            Some error occured while fetching video
          </p>
        )}
        {data &&
          data.map((post: T_Post, i: number) => (
            <VideoCard
              creator={{
                handle: post.creator.handle,
                profileImageUrl: post.creator.pic,
              }}
              description={post.submission.description}
              thumbnailUrl={post.submission.thumbnail}
              title={post.submission.title}
              videoId={post.postId}
              key={i}
            />
          ))}
      </div>
    </main>
  );
}
