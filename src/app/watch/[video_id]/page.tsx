"use client";
import RollVideoCard from "@/components/RollVideoPlayer";
import SpalshScreen from "@/components/SpalshScreen";
import { T_Post } from "@/types";
import { getVideos } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type T_params = {
  video_id: string;
};

function page({ params }: { params: T_params }) {
  const { video_id } = params;
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = getVideos();

  const [watchVideo, setWatchVideo] = useState<T_Post | null>(null);

  useEffect(() => {
    if (status !== "loading" && status !== "error") {
      for (let i = 0; i < data.pages.length; i++) {
        const page = data.pages[i];
        const search = page.posts.filter((post) => post.postId === video_id);
        if (search.length > 0) {
          setWatchVideo(search[0]);
          break;
        }
      }
    }
  }, [status, data]);

  return (
    <main className="mx-2 flex flex-wrap overflow-y-scroll snap snap-y snap-mandatory justify-center ">
      <div className="h-full">
        {status === "loading" ? (
          <SpalshScreen />
        ) : status === "error" ? (
          <p className="p-5 bg-red-300 rounded-lg text-red-950">
            {/* @ts-ignore */}
            Some error occured while fetching video {error.message}
          </p>
        ) : watchVideo ? (
          <RollVideoCard
            description={watchVideo.submission.description}
            videoUrl={watchVideo.submission.mediaUrl}
            comment={{
              count: watchVideo.comment.count,
              enabled: watchVideo.comment.commentingAllowed,
            }}
            reactions={{
              count: watchVideo.reaction.count,
              voted: watchVideo.reaction.voted,
            }}
            creator={{
              handle: watchVideo.creator.handle,
              profileImageUrl: watchVideo.creator.pic,
            }}
            thumbnailUrl={watchVideo.submission.thumbnail}
            title={watchVideo.submission.title}
            videoId={watchVideo.postId}
            shareUrl={watchVideo.submission.hyperlink}
          />
        ) : (
          <div>
            Video not found!{" "}
            <Link href="/videos">
              <p className="hover:underline font-medium"> Head back to home</p>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default page;
