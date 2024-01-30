// AudioUploader.js
import React from 'react';

function AudioUploader({ onFileUpload }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileUpload(file);
    };

    return (
        <div>
            <h2>Upload Audio File</h2>
            <input type="file" accept="audio/*" onChange={handleFileChange} />
        </div>
    );
}

export default AudioUploader;
