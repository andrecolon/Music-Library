import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, isPlaying, audioRef, setSongs }) => {
  return (
    <div className="library">
      <h2>Music Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
