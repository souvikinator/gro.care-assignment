import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

function VideoHeader() {
  const router = useRouter();
  return (
    <div className="absolute inset-x-0 top-0 flex text-whit p-4 justify-between z-50">
      <div className="flex items-center space-x-5">
        <button className="hover:cursor-pointer" onClick={() => router.back()}>
          <BiArrowBack size={20} />
        </button>
        <p className="text-2xl font-medium opacity-70">Rolls</p>
      </div>
    </div>
  );
}

export default VideoHeader;
