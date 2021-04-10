import React from "react";
function BottomPlayer() {
  return (
    <div className="Rectangle3">
      <img
        className="Play"
        src="https://i.imgur.com/Dw0qvyn.png"
        alt="PlayButton"
      />
      <div className="Previous">
        <img
          className="PreviousRectangle"
          src="https://i.imgur.com/kTZzlfc.png"
          alt="Rectangle"
        />
        <img
          className="PreviousTriangle"
          src="https://i.imgur.com/5SIuRAf.png"
          alt="Triangle"
        />
      </div>
      <div className="Next">
        <img
          className="NextRectangle"
          src="https://i.imgur.com/kTZzlfc.png"
          alt="NextRectangle"
        />
        <img
          className="NextTriangle"
          src="https://i.imgur.com/5SIuRAf.png"
          alt="NextTriangle"
        />
      </div>
      <div className="Player">
        <img
          className="RectanglePlayer"
          src="https://i.imgur.com/eOwktfn.png"
          alt="playerRect"
        />
        <p className="endTime">02:18</p>
        <p className="startTime">00:00</p>
      </div>
      <div className="rightSong">
        <img
          className="MiniCover"
          src="https://i.imgur.com/IeIpWqF.png"
          alt="AlbumCover"
        />
        <p className="SongName">One Step Beyond</p>
        <p className="SongArtist">Madness</p>
      </div>
      <div className="Heart">
        <img
          className="HeartButton"
          src="https://i.imgur.com/MaARDzR.png"
          alt="heartButton"
        />
      </div>
      <div className="CreditCard">
        <img
          className="cardButton"
          src="https://i.imgur.com/6NPeZxq.png"
          alt="cardButton"
        />
      </div>
    </div>
  );
}
export default BottomPlayer;
