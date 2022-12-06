import React from 'react';
import ReactHlsPlayer from 'react-hls-player';


function Player() {
        return (
            <ReactHlsPlayer
            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
        />
    )
}

export default Player;
