import React, { useState } from "react";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
}) => {
  //Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // Drag input handler
  const dragHandler = (e) => {
    //Update music time state when I drag
    audioRef.current.currentTime = e.target.value;
    //Update time code on drag handle
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time__control">
        <p className="start">{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p className="end">{getTime(songInfo.duration)}</p>
        <div className="play__control">
          <span className="skip-back">REWIND</span>
          <span className="play" onClick={playSongHandler}>
            {isPlaying ? "Pause" : "Play"}
          </span>
          <span className="forward">FORWARD</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
// Let's display a waveform - fun!
// https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14
