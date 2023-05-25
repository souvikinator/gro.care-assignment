import React, { useState } from "react";

type T_props = {
  profileImage: string;
  title: string;
  creator: string;
  description: string;
};

function VideoFooter(props: T_props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="absolute inset-x-0 bottom-0  flex flex-row w-full p-4">
      <div className="w-1/12 py-2">
        <img
          alt="Placeholder"
          className="block rounded-full w-11"
          src={props.profileImage}
        />
      </div>
      <div className="ml-3 w-10/12 text-white">
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="text-md ">{props.creator}</p>
        <div className={``} onClick={() => setExpanded((prev) => !prev)}>
          <p className={`flex ${!expanded && "truncate"}`}>
            {props.description}
          </p>
          {!expanded && <p className="font-semibold">Read more</p>}
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
