"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-2 flex flex-wrap overflow-y-scroll snap snap-y snap-mandatory justify-center ">
      <div>
        <Link href="/rolls">
          <p className="text-white hover:underline">Rolls view</p>
        </Link>
        <Link href="/videos">
          <p className="text-white hover:underline">Video gallery view</p>
        </Link>
      </div>
    </main>
  );
}
