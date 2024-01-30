// Playlist.js
import React from 'react';

function Playlist({ audioFiles, handlePlay }) {
    return (
        <div>
            <h2>Playlist</h2>
            <ul>
                {audioFiles.map((file, index) => (
                    <li key={index} onClick={() => handlePlay(index)}>
                        {file.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
