"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10 mx-auto h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-5xl font-medium">PopFizz</p>
        <p className="mt-2 text-lg text-gray-500">
          the gateway to a world of videos and inspiration!
        </p>
        <div className="py-10 flex flex-row space-x-2 items-center">
          <Link href="/rolls">
            <p className="p-3 rounded bg-violet-400 items-center justify-center flex font-medium">
              Rolls view
            </p>
          </Link>
          <Link href="/videos">
            <p className="p-3 rounded bg-violet-400 items-center justify-center flex font-medium">
              Video gallery
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
