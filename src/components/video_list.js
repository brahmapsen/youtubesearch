//does not have any need for state. It does not need to staore any value
//we can make it a functional component

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map( (video) => {
            return (
                    <VideoListItem 
                        onVideoSelect = {props.onVideoSelect}
                        key={video.etag} 
                        video={video} />
            );
    });

    return (
        <ul className="col-md-4 list-group">
                {videoItems}
        </ul>
    );

}

export default VideoList;