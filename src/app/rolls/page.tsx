"use client";
import { fetchVideos } from "../../utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";
import { T_ResponseData } from "@/types";
import SpalshScreen from "@/components/SpalshScreen";
import RollVideoCard from "@/components/RollVideoPlayer";

export default function Rolls() {
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
    <main className="flex flex-col mx-auto max-h-screen overflow-y-scroll snap snap-y snap-mandatory no-scrollbar">
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
                <RollVideoCard
                  description={post.submission.description}
                  videoUrl={post.submission.mediaUrl}
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
                  shareUrl={post.submission.hyperlink}
                  key={i}
                />
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
    </main>
  );
}
