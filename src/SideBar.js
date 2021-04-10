import React from "react";
function SideBar() {
  return (
    <div className="Sidebar">
      {/* Logo */}
      <img
        src="https://i.imgur.com/sxNZffe.png"
        alt="logo"
        className="LogoSpotifyBig"
      />
      {/* Giris Div */}
      <div className="MenuEntryActive">
        <svg>
          <rect className="Rectangle1" />
        </svg>
        <img
          className="HomeFilled"
          src="https://i.imgur.com/Y4vFqRs.png"
          alt="homeVector"
        />
        <p className="Accueil">Giriş</p>
      </div>
      {/* Gozat Div */}
      <div className="MenuEntryDisabled">
        <svg>
          <rect className="Rectangle2" />
        </svg>
        <img
          className="SearchSmall"
          src="https://i.imgur.com/EA7R5sX.png"
          alt="searchVector"
        />
        <p className="Gozat">Gözat</p>
      </div>
      {/* Kitaplik (Not a Div) */}
      <img
        className="LibrarySmall"
        src="https://i.imgur.com/fIhU5Dt.png"
        alt="homeVector"
      />
      <p className="Kitaplik">Kitaplik</p>

      {/*Text Under Library*/}
      <p className="Calma">Çalma Lİstelerin</p>

      {/*Search In Side (Image)*/}
      <div className="searchDiv">
        <img
          className="Rectangle6"
          src="https://i.imgur.com/eOwktfn.png"
          alt="searchRectangle"
        />
        <img
          className="SearchSideBar"
          src="https://i.imgur.com/EA7R5sX.png"
          alt="searchVector"
        />
        <p className="Ara">Ara</p>
        <img
          className="filterVector"
          src="https://i.imgur.com/1xHVtav.png"
          alt="filterVector"
        />
      </div>

      {/* Playlist 1 */}
      <div className="Frame1">
        <div className="PlaylistName">
          <p className="PlaylistText">Rock Save the Queen</p>
        </div>
      </div>
      {/* Playlist 2 */}
      <div className="Frame2">
        <div className="PlaylistName2">
          <p className="PlaylistText2">AdFab Open Space</p>
        </div>
      </div>
      {/* Playlist 3 */}
      <div className="Frame3">
        <div className="PlaylistName3">
          <div className="Round">
            <img
              className="roundImg"
              src="https://i.imgur.com/iQ7X0NN.png"
              alt="circle"
            />
          </div>
          <p className="PlaylistText3">Hareketli Müzik</p>
        </div>
      </div>
      {/* Playlist 4 */}
      <div className="Frame4">
        <div className="PlaylistName4">
          <p className="PlaylistText4">Klasik Müzik Listem</p>
        </div>
      </div>
      {/* Playlist 5 */}
      <div className="Frame5">
        <div className="PlaylistName5">
          <p className="PlaylistText5">Bandes Originales & Pop C</p>
        </div>
      </div>
      {/* Playlist 6 */}
      <div className="Frame6">
        <div className="PlaylistName6">
          <p className="PlaylistText6">Shazamladıkların</p>
        </div>
      </div>
      {/* Playlist 7 */}
      <div className="Frame7">
        <div className="PlaylistName7">
          <p className="PlaylistText7">2019 Favori Listesie</p>
        </div>
      </div>
      {/* Playlist 8 */}
      <div className="Frame8">
        <div className="PlaylistName8">
          <p className="PlaylistText8">Rock Akustik </p>
        </div>
      </div>
      {/* Playlist 9 */}
      <div className="Frame9">
        <div className="PlaylistName9">
          <div className="Round">
            <img
              className="roundImg"
              src="https://i.imgur.com/iQ7X0NN.png"
              alt="circle"
            />
          </div>
          <p className="PlaylistText9">Pop çalma listesi</p>
        </div>
      </div>
      {/* Playlist 10 */}
      <div className="Frame10">
        <div className="PlaylistName10">
          <p className="PlaylistText10">Radyo Favorilerin</p>
        </div>
      </div>
      {/* Playlsit11 */}
      <div className="Frame11">
        <div className="PlaylistName11">
          <p className="PlaylistText11">Nova Like - Le Grand Mix</p>
        </div>
      </div>
      {/* Playlsit12Extra */}
      <div className="Frame12">
        <div className="PlaylistName12">
          <p className="PlaylistText12">Extra 1</p>
        </div>
      </div>
      {/* Playlsit13Extra */}
      <div className="Frame13">
        <div className="PlaylistName13">
          <p className="PlaylistText13">Extra 2</p>
        </div>
      </div>
      {/* Playlsit14Extra */}
      <div className="Frame14">
        <div className="PlaylistName14">
          <p className="PlaylistText14">Extra 3</p>
        </div>
      </div>
      {/* Playlsit15Extra */}
      <div className="Frame15">
        <div className="PlaylistName15">
          <p className="PlaylistText15">Extra 4</p>
        </div>
      </div>
      {/* Playlsit16Extra */}
      <div className="Frame16">
        <div className="PlaylistName16">
          <p className="PlaylistText16">Extra 5</p>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
