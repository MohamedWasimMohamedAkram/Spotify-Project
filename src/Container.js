import React, { useState } from "react";
import songData from "./spotify.json";
import SearchPage from "./SearchPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  withRouter
} from "react-router-dom";
function Container(event) {
  const [search, setSearch] = useState("");
  let foundArr = [];
  const history = useHistory();
  const changeUrl = () => {
    history.push("/search");
  };
  function searchResults(event) {
    setSearch(event.target.value);
    for (let i = 0; i < songData.allPlaylists.length; i++) {
      if (
        songData.allPlaylists[i].name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        foundArr.push(songData.allPlaylists[i].name);
      }
    }
    console.log(foundArr);
    return foundArr;
  }

  function Container() {}
  return (
    <div className="MainContainer">
      <div className="TopNav">
        <img
          className="ChevronRight"
          src="https://i.imgur.com/VPSzHs0.png"
          alt="NextPage"
        />
        <img
          className="ChevronLeft"
          src="https://i.imgur.com/YHnocEv.png"
          alt="NextPage"
        />
      </div>
      <Route exact path="/search" component={withRouter(SearchPage)} />
      <button
        onClick={(e) => {
          searchResults(e);
          changeUrl();
        }}
        className="SearchInput"
      >
        Ara
      </button>
      {/* {songData.allPlaylists
        .filter((value) => {
          if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((value, index) => {
          return (
            <div className="SearchResultsPage">
              <h1 className="foundResults">{value.name}</h1>
            </div>
          );
        })} */}
      <img
        className="SearchRectangle"
        src="https://i.imgur.com/eOwktfn.png"
        alt="playerRect"
      />
      <img
        className="SearchLarge"
        src="https://i.imgur.com/EA7R5sX.png"
        alt="searchVector"
      />
      {/* <p className="SearchLargeText">Ara</p> */}

      <div className="Profile">
        <img
          className="ProfilePic"
          src="https://i.imgur.com/AsYWEU3.png"
          alt="ProfilePic"
        />
        <p className="ProfileName">Arthur Guillermin Ha...</p>
        <img
          className="ProfileRectangle"
          src="https://i.imgur.com/eOwktfn.png"
          alt="ProfileRectangle"
        />
      </div>
      <h1 className="FirstHeading">Yakında Çalanlar</h1>
      {/* UpperLists */}
      <div className="Line1">
        {/* Playlist 1 Design */}
        <a href={songData.recentlyPlayed[0].external_urls.spotify}>
          <div className="MainPlaylist1">
            <img
              className="CoverImg1"
              src={songData.recentlyPlayed[0].images[0].url}
              alt="Cover"
            />
            <p className="coverName1">
              {songData.recentlyPlayed[0].description}
            </p>
            <img
              className="NormalState1"
              src="https://i.imgur.com/eOwktfn.png"
              alt="Cover Rectangle"
            />
            <div className="TextContainer1">
              <p className="AlbumName1">{songData.recentlyPlayed[0].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 2 Design */}
        <a href={songData.recentlyPlayed[1].external_urls.spotify}>
          <div className="MainPlaylist2">
            <img
              className="CoverImg2"
              src={songData.recentlyPlayed[1].images[0].url}
              alt="Cover"
            />
            <p className="coverName2">
              {songData.recentlyPlayed[1].description}
            </p>
            <img
              className="NormalState2"
              src="https://i.imgur.com/eOwktfn.png"
              alt="Cover Rectangle"
            />
            <div className="TextContainer2">
              <p className="AlbumName2">{songData.recentlyPlayed[1].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 3 Design */}
        <a href={songData.recentlyPlayed[2].external_urls.spotify}>
          <div className="MainPlaylist3">
            <img
              className="CoverImg3"
              src={songData.recentlyPlayed[2].images[0].url}
              alt="Cover"
            />
            <p className="coverName3">
              {songData.recentlyPlayed[2].description}
            </p>
            <img
              className="NormalState3"
              src="https://i.imgur.com/eOwktfn.png"
              alt="Cover Rectangle"
            />
            <div className="TextContainer3">
              <p className="AlbumName3">{songData.recentlyPlayed[2].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 4 Design */}
        <a href={songData.recentlyPlayed[3].external_urls.spotify}>
          <div className="MainPlaylist4">
            <img
              className="CoverImg4"
              src={songData.recentlyPlayed[3].images[0].url}
              alt="Cover"
            />
            <p className="coverName4">
              {songData.recentlyPlayed[3].description}
            </p>
            <img
              className="NormalState4"
              src="https://i.imgur.com/eOwktfn.png"
              alt="Cover Rectangle"
            />
            <div className="TextContainer4">
              <p className="AlbumName4">{songData.recentlyPlayed[3].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 5 Design */}
        <a href={songData.recentlyPlayed[4].external_urls.spotify}>
          <div className="MainPlaylist5">
            <img
              className="CoverImg5"
              src={songData.recentlyPlayed[4].images[0].url}
              alt="Cover"
            />
            <p className="coverName5">
              {songData.recentlyPlayed[4].description}
            </p>
            <img
              className="NormalState5"
              src="https://i.imgur.com/eOwktfn.png"
              alt="Cover Rectangle"
            />
            <div className="TextContainer5">
              <p className="AlbumName5">{songData.recentlyPlayed[4].name}</p>
            </div>
          </div>
        </a>
      </div>
      {/* Line2 */}
      <div className="Line2">
        {/* Texts */}
        <p className="Tavsiye">Tavsiye Edilenler</p>
        <p className="SevText">Sevdiğin her şeyden biraz dinle.</p>
        {/* Playlist 1 Design */}
        <a href={songData.recommended[0].external_urls.spotify}>
          <div className="SecondPlaylist1">
            <img
              className="SecondCoverImg1"
              src={songData.recommended[1].images[0].url}
              alt="Cover"
            />
            <p className="SecondCoverName1">
              {songData.recommended[0].description}
            </p>
            <img
              className="SecondNormalState1"
              src="https://i.imgur.com/eOwktfn.png"
              alt="SecondCover Rectangle"
            />
            <div className="SecondTextContainer1">
              <p className="SecondAlbumName1">{songData.recommended[0].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 2 Design */}
        <a href={songData.recommended[1].external_urls.spotify}>
          <div className="SecondPlaylist2">
            <img
              className="SecondCoverImg2"
              src={songData.recommended[1].images[0].url}
              alt="Cover"
            />
            <p className="SecondCoverName2">
              {songData.recommended[1].description}
            </p>
            <img
              className="SecondNormalState2"
              src="https://i.imgur.com/eOwktfn.png"
              alt="SecondCover Rectangle"
            />
            <div className="SecondTextContainer2">
              <p className="SecondAlbumName2">{songData.recommended[1].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 3 Design */}
        <a href={songData.recommended[2].external_urls.spotify}>
          <div className="SecondPlaylist3">
            <img
              className="SecondCoverImg3"
              src={songData.recommended[2].images[0].url}
              alt="Cover"
            />
            <p className="SecondCoverName3">
              {songData.recommended[2].description}
            </p>
            <img
              className="SecondNormalState3"
              src="https://i.imgur.com/eOwktfn.png"
              alt="SecondCover Rectangle"
            />
            <div className="SecondTextContainer3">
              <p className="SecondAlbumName3">{songData.recommended[2].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 4 Design */}
        <a href={songData.recommended[3].external_urls.spotify}>
          <div className="SecondPlaylist4">
            <img
              className="SecondCoverImg4"
              src={songData.recommended[3].images[0].url}
              alt="Cover"
            />
            <p className="SecondCoverName4">
              {songData.recommended[3].description}
            </p>
            <img
              className="SecondNormalState4"
              src="https://i.imgur.com/eOwktfn.png"
              alt="SecondCover Rectangle"
            />
            <div className="SecondTextContainer4">
              <p className="SecondAlbumName4">{songData.recommended[3].name}</p>
            </div>
          </div>
        </a>
        {/* Playlist 5 Design */}
        <a href={songData.recommended[4].external_urls.spotify}>
          <div className="SecondPlaylist5">
            <img
              className="SecondCoverImg5"
              src={songData.recommended[4].images[0].url}
              alt="Cover"
            />
            <p className="SecondCoverName5">
              {songData.recommended[4].description}
            </p>
            <img
              className="SecondNormalState5"
              src="https://i.imgur.com/eOwktfn.png"
              alt="SecondCover Rectangle"
            />
            <div className="SecondTextContainer5">
              <p className="SecondAlbumName5">{songData.recommended[4].name}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Container;
