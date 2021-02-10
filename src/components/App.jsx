import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.toggleClick = this.toggleClick.bind(this);
    this.videoListUpdater = this.videoListUpdater.bind(this);
  }

  componentDidMount() {
    this.videoListUpdater('are cats better than dogs');
  }

  videoListUpdater (text) {
    var dataForHomePage;

    this.props.searchYouTube({ key: YOUTUBE_API_KEY, query: text}, (video) => {
      dataForHomePage = video;
      this.setState({
        allVideos: dataForHomePage,
        currentVideo: dataForHomePage[0]
      });
    });
  }

  toggleClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.props.searchYouTube} searchText={this.videoListUpdater}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.allVideos} toggleClick={this.toggleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
