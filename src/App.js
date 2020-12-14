import React, { useState } from 'react';
import './styles/app.scss';

import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav'
import data from './chillHop';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
