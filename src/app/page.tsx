"use client";
import VideoCard from "@/components/VideoCard";
import { fetchVideos } from "../utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";
import { T_ResponseData } from "@/types";
import SpalshScreen from "@/components/SpalshScreen";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  const infiniteScrollObserver = useInView({
    threshold: 1,
  });

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
    if (infiniteScrollObserver.inView) {
      fetchNextPage();
    }
  }, [infiniteScrollObserver.inView]);

  return (
    <main className="mx-2 rounded-t-xl flex flex-wrap mb-2 overflow-y-scroll snap snap-y snap-mandatory">
      <div className="h-full">
        {status === "loading" ? (
          <SpalshScreen />
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
                  <VideoPlayer src={post.submission.mediaUrl} />
                ))}
              </>
            ))}
            <div className="w-full flex items-center justify-center">
              <button
                ref={infiniteScrollObserver.ref}
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
