import React, { Component } from "react";
import axios from "axios";
import Idle from "./Idle";
import Header from "./Header"
import Loading from "./Loading";
import Error from "./Error";
import { withFavoritesContext } from "./Favorites";
import Navbar from "./Navbar"
const tabUrl = `https://vschool-cors.herokuapp.com?url=http://www.songsterr.com/a/ra/songs.json?pattern=`;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      idle: true,
      err: null,
      alert: null,
      input: ""
    };
    this.handleResults = this.handleResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }
  handleChange({ target }) {
    this.setState({ input: target.value });
  }
  handleChecked(id) {
    return e => {
      this.setState(({ data }) => ({
        data: data.map(
          song => (song.id == id ? { ...song, selected: !song.selected } : song)
        )
      }));
    };
  }
  handleResults(e) {
    e.preventDefault();
    this.setState({ idle: false, loading: true });
    axios
      .get(tabUrl + this.state.input)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            alert: false
          });
        } else {
          this.setState({
            alert: true
          });
        }
        this.setState({
          data: response.data,
          loading: false,
          err: null
        });
      })
      .catch(err => {
        this.setState({
          data: null,
          loading: false,
          err: { message: "404, data not found" }
        });
      });
  }
  handleFavorites(e) {
    // filter songs by selected
    // use Promise.all to make a bunch of individual post requests
    const selectedSongs = this.state.data.filter(song => song.selected);
    const posts = selectedSongs.map(song =>
      axios.post("/api/tabs", {
        songId: song.id,
        title: song.title,
        artist: song.artist.name,
        link: `http://www.songsterr.com/a/wa/song?id=${song.id}`
      })
    );
    Promise.all(posts)
    .then(response => response.map(res => res.data))
    .then(this.props.addToFavorites)
    // take this array of data, and add it to the favorites
  }

  render() {
    const { idle, loading, err, data } = this.state;
    const tabList = this.state.data.map(item => (
      <div key={item.id}>
        <input
          className="check-box"
          onChange={this.handleChecked(item.id)}
          value={item.selected}
          type="checkbox"
        />
        <a
          target="_blank"
          href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}
        >
          {item.title}
        </a>
      </div>
    ));
    return (
      <div>
        <Header />
        <Navbar />
        <form onSubmit={this.handleResults} type="submit">
        <input
            className="search-box"
            placeholder="Artist/Song title"
            onChange={this.handleChange}
            value={this.state.input}
            type="text"
        />
        <button className="search-button" onSubmit={this.handleResults}>Search</button>
        </form>
        <Idle idle={idle}>
          <Loading loading={loading}>
            <Error err={err}>
              <div className="view-wrapper">
                <div className="favorite-button">
                  <button className="add-to-favorites" onClick={this.state} onClick={this.handleFavorites}>+ to Favorites</button>
                </div>
                <ul>
                  <h4>Click a link to view the tabs.</h4>
                  {this.state.alert
                    ? "You're search returned no results"
                    : tabList}
                </ul>
              </div>
            </Error>
          </Loading>
        </Idle>
      </div>
    );
  }
}

export default withFavoritesContext(Search);
