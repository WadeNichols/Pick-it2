import React from "react";
import { withFavoritesContext } from "./Favorites";
import Loading from "./Loading";
import Idle from "./Idle";
import Error from "./Error";
import Navbar from "./Navbar";
import Header from "./Header"

function FavoritesList({
  favorites,
  idle,
  loading,
  err,
  handleChecked,
  deleteFavorite
}) {
  const favElements = favorites.map(favorite => (
    <li key={favorite._id}>
      <input
        className="check-box"
        onChange={handleChecked(favorite._id)}
        value={favorite.selected}
        type="checkbox"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`http://www.songsterr.com/a/wa/song?id=${favorite.songId}`}
        key={favorite._id}
      >
        {favorite.title} - {favorite.artist}
      </a>
    </li>
  ));
  return (
    <Idle idle={idle}>
      <Header />
      <Navbar />
      <Loading loading={loading}>
        <Error err={err}>
          <div className="favorites-wrapper">
            <div className="delete-button">
              <button onClick={deleteFavorite}>-Delete-</button>
            </div>
            <ul>{favElements}</ul>
          </div>
        </Error>
      </Loading>
    </Idle>
  );
}

export default withFavoritesContext(FavoritesList);
