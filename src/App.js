// App.js
import React, { useState, useEffect } from 'react';
import AudioUploader from './components/AudioUploader';
import Playlist from './components/Playlist';
import NowPlaying from './components/NowPlaying';

function App() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    // Check if there's a previously playing track in local storage
    const storedTrackIndex = localStorage.getItem('currentTrackIndex');
    if (storedTrackIndex !== null) {
      setCurrentTrackIndex(parseInt(storedTrackIndex));
    }

    // Add event listener for when the page is unloaded
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Store the current track index in local storage
    localStorage.setItem('currentTrackIndex', currentTrackIndex.toString());
  }, [currentTrackIndex]);

  const handleBeforeUnload = () => {
    // Store the current track index in local storage before the page is unloaded
    localStorage.setItem('currentTrackIndex', currentTrackIndex.toString());
  };

  const handleFileUpload = (file) => {
    setAudioFiles([...audioFiles, file]);
  };

  const handlePlay = (index) => {
    setCurrentTrackIndex(index);
  };

  return (
    <div>
      <h1>Audio Player</h1>
      <AudioUploader onFileUpload={handleFileUpload} />
      <Playlist audioFiles={audioFiles} handlePlay={handlePlay} />
      <NowPlaying currentTrack={audioFiles[currentTrackIndex]} />
      {/* HTML audio player goes here */}
      {audioFiles.length > 0 && (
        <audio controls autoPlay>
          <source
            src={URL.createObjectURL(audioFiles[currentTrackIndex])}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default App;
