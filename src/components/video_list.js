import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  return (
    <ul className="col-md-4 group list">
      {props.videos.map((video) => (
        <VideoListItem
          video={video}
          key={video.etag}
          onVideoSelect={props.onVideoSelect}
        />
      ))}
    </ul>
  );
};

export default VideoList;
