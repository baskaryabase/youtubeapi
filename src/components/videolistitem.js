import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  const ImageUrl= video.snippet.thumbnails.default.url;
  return (<ol onClick={ () => onVideoSelect(video)} className="list-group-item">

    <div  className="video-list-media">
      <div className="media-left">
        <img className="media-object" src={ImageUrl} alt="" />
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
  </div>
</ol>
);
};

export default VideoListItem;
