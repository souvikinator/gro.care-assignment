"use client";
import VideoCard from "@/components/VideoCard";
import { fetchVideos } from "../utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";
import { T_ResponseData } from "@/types";

export default function Home() {
  const { ref, inView } = useInView();

  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<T_ResponseData>(
    ["videos"],
    async ({ pageParam = 0 }) => {
      return await fetchVideos(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.offset ?? undefined,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <main className="">
      <div className="flex flex-wrap -mx-1 lg:-mx-4 mb-2 overflow-hidden">
        {status === "loading" ? (
          <div className="w-full flex flex-col items-center justify-center mt-10">
            <FadeLoader color="#24282F" aria-setsize={25} />
            <p className="text-xl font-medium text-gray-800">
              Loading the gateway to a world of videos and inspiration!
            </p>
          </div>
        ) : status === "error" ? (
          <p className="p-5 bg-red-300 rounded-lg text-red-950">
            {/* @ts-ignore */}
            Some error occured while fetching video {error.message}
          </p>
        ) : (
          <>
            {data.pages.map((page) => (
              <>
                {page.posts.map((post, i) => (
                  <VideoCard
                    comment={{
                      count: post.comment.count,
                      enabled: post.comment.commentingAllowed,
                    }}
                    reactions={{
                      count: post.reaction.count,
                      voted: post.reaction.voted,
                    }}
                    creator={{
                      handle: post.creator.handle,
                      profileImageUrl: post.creator.pic,
                    }}
                    thumbnailUrl={post.submission.thumbnail}
                    title={post.submission.title}
                    videoId={post.postId}
                    key={i}
                  />
                ))}
              </>
            ))}
            <div className="w-full flex items-center justify-center">
              <button
                ref={ref}
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                className="p-3 rounded-md bg-gray-900 text-white font-medium"
              >
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                  ? "Load Newer"
                  : "Nothing more to load"}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
