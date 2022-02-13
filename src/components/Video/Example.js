import { Component } from 'react';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../../data/videos.json'; //данные, потом будут приходить с бекэнда

export class Example extends Component {
  state = {
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div>
        <h1>--- Video {this.state.selectedVideo}---</h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={this.state.selectedVideo} />
        {/* Player принимает один проп - ссылку на видео */}
      </div>
    );
  }
}
