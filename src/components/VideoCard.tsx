import React from "react";

type T_VideoCardProps = {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  creator: {
    handle: string;
    profileImageUrl: string;
  };
};

function VideoCard(props: T_VideoCardProps) {
  return (
    <div className="my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <a href={`/watch/${props.videoId}`}>
        <article className="overflow-hidden rounded-lg shadow-lg">
          {/* TODO: thumbnail */}
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={props.thumbnailUrl}
          />
          <div className="flex w-full p-2 md:p-4">
            <div className="">
              <img
                alt="Placeholder"
                className="block rounded-full w-10"
                src={props.creator.profileImageUrl}
              />
            </div>
            <div className="ml-2 w-full">
              <p className="ml-2 text-xl font-semibold">{props.title}</p>
              <p className="ml-2 text-md ">{props.creator.handle}</p>
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
