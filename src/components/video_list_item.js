import React from "react";

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { video: props.video };
    this.onVideoSelect = props.onVideoSelect;
  }

  render() {
    const imageUrl = this.state.video.snippet.thumbnails.default.url;
    console.log(imageUrl);
    return (
      <li
        onClick={() => this.onVideoSelect(this.state.video)}
        className="list-group-item"
      >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading"></div>
          </div>
        </div>
        {this.state.video.etag}
      </li>
    );
  }
}

export default VideoListItem;
