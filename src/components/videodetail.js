import React from 'react';

const VideoDetai = ({video}) => {

  if (!video) {
    return (<div><img src="https://www.createwebsite.net/wp-content/uploads/2015/09/GD.gif" alt="" /></div>);
  }

    const VideoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + VideoId;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
         <iframe className="embed-responsive-item" src={url} />
        </div>

        <div className="Details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
}

export default VideoDetai;
