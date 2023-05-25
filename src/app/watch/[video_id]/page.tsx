import React from "react";

type T_params = {
  video_id: string;
};

function page({ params }: { params: T_params }) {
  const { video_id } = params;
  return <div>watch ${video_id}</div>;
}

export default page;
