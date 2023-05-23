"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import ReactPlayer from "react-player";
import { FadeLoader } from "react-spinners";

// @ts-ignore
function Page({ params, searchParams }) {
  const { video_id } = params;
  return <div>watch video</div>;
}

export default Page;
