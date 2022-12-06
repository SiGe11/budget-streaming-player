import React from 'react';
import HlsPlayer from './HlsPlayer';

function Player() {
        return (
            <HlsPlayer
            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"/>
    )
}

export default Player;
