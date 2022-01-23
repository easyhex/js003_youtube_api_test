import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from "lodash";

const API_KEY = "AIzaSyA_DqP0LLpIt9Z0dUfY2f25BrEpniHaBMw";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("react js course");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSerach = _.debounce((term) => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSerach} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} // то есть во тут сахар, идёт реальная ссылка на одноимённую переменную
          />
        </div>

        {/* то есть вставка videos в конструктор означает, что props в парамтерах фукции будет иметь свойство videos */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
