import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range"></input>
        <p>End Time</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="play" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
