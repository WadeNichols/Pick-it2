import React, { Component, createContext } from "react";
import axios from "axios";

export const FavoritesContext = createContext();
const favoritesUrl = "/api/tabs";

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      err: null,
      favorites: []
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites(newFavorites) {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, ...newFavorites]
    }));
  }

  _getFavoritesData(url) {
    return axios.get(url).then(response => response.data);
  }
  _handleFavoritesData() {
    return this._getFavoritesData(favoritesUrl).then(favorites => [
      ...favorites
    ]);
  }
  handleChecked(id) {
    return e => {
      this.setState(({ favorites }) => ({
        favorites: favorites.map(
          song =>
            song._id == id ? { ...song, selected: !song.selected } : song
        )
      }));
    };
  }
  deleteFavorite() {
    const selectedSongs = this.state.favorites.filter(song => song.selected);
    const deletes = selectedSongs.map(song => {
      return axios
        .delete(`/api/tabs/${song._id}`)
        .then(response => {
          return response.data._id
        })
        .catch(err => {
          console.log(err);
        });
    });
    Promise.all(deletes)
    .then(ids => this.setState( prevState => {
      console.log(ids)
        return {
          favorites: prevState.favorites.filter(song => !ids.includes(song._id))
        }
    }))
  };


  componentDidMount() {
    this._handleFavoritesData()
      .then(favorites =>
        this.setState({
          loading: false,
          err: null,
          favorites
        })
      )
      .catch(err =>
        this.setState({
          err
        })
      );
  }
  render() {
    const props = {
      ...this.state,
      handleChecked: this.handleChecked,
      deleteFavorite: this.deleteFavorite,
      addToFavorites: this.addToFavorites
    };
    return (
      <FavoritesContext.Provider value={props}>
        {this.props.children}
      </FavoritesContext.Provider>
    );
  }
}

export const withFavoritesContext = Comp => props => (
  <FavoritesContext.Consumer>
    {value => <Comp {...value} {...props} />}
  </FavoritesContext.Consumer>
);
