// NowPlaying.js
import React from 'react';

function NowPlaying({ currentTrack }) {
    return (
        <div>
            <h2>Now Playing</h2>
            <p>{currentTrack ? currentTrack.name : 'No track playing'}</p>
        </div>
    );
}

export default NowPlaying;
