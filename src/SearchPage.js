import React from "react";
import { useState } from "react";
import songData from "./spotify.json";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  withRouter
} from "react-router-dom";
import Container from "./Container";
function SearchPage() {
  const [search, setSearch] = useState("");
  const history = useHistory();
  let foundArr = [];
  // Function to change url
  const changeUrl = () => {
    history.push("/");
  };

  //Function for results
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

  function showResults() {
    return console.log(search);
  }

  return (
    <div className="SearchDiv">
      <div className="SearchTop">
        <Route exact path="/" component={withRouter(Container)} />
        <button className="backButton" onClick={changeUrl} />
        <input
          onChange={(e) => {
            searchResults(e);
            showResults();
          }}
          type="text"
          className="SearchInput2"
        />
      </div>
      <div className="playlistLists">
        {songData.allPlaylists
          .filter((value) => {
            if (value.name.toLowerCase().includes(search.toLowerCase())) {
              return { value };
            }
          })
          .map((value, index) => {
            return (
              <a
                href={value.external_urls.spotify}
                className="anchorTag"
                key={index}
              >
                <div className="SearchResultsPage" key={index}>
                  <img
                    className="SearchResultRectangle"
                    src="https://i.imgur.com/eOwktfn.png"
                    alt="Cover Rectangle"
                  />
                  <img
                    className="ResultCoverImg"
                    src={value.images[0].url}
                    alt="CoverImg"
                  />
                  <p className="searchedText">{value.name}</p>
                  <p className="searchedDescription">{value.description}</p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}
export default SearchPage;
