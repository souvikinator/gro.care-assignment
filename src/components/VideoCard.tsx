import React from "react";

type T_VideoCardProps = {
  videoId: string;
  thumbnailUrl: string;
  creator: {
    handle: string;
    profileImageUrl: string;
  };
};

function VideoCard() {
  return (
    <div className="my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <a href="/watch/:id">
        <article className="overflow-hidden rounded-lg shadow-lg">
          {/* TODO: thumbnail */}
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
          <div className="flex w-full p-2 md:p-4">
            <div className="">
              <img
                alt="Placeholder"
                className="block rounded-full w-10"
                src="https://picsum.photos/32/32/?random"
              />
            </div>
            <div className="ml-2 w-full">
              <p className="ml-2 text-xl font-semibold">Video title</p>
              <p className="ml-2 text-md ">channel</p>
              <div className="ml-2 flex flex-row items-center">
                <p className="text-sm">3.2M views</p>
                <p className="px-1">{"•"}</p>
                <p className="text-sm">3 hours ago</p>
              </div>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
}

export default VideoCard;
