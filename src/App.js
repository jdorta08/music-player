import React, { useState } from "react";
//Import Styles
import "./styles/style.scss";
//Import Components
import Song from "./components/Song";
import Player from "./components/Player";
//Import Music Data
import data from "./data";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
