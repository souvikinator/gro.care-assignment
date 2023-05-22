"use client";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-y-auto ">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <VideoCard />
        ))}
      </div>
    </main>
  );
}
