import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
const giphyKey = "&api_key=dc6zaTOxFJmzC&rating=g";

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      searchTerm: ""
    };
  }

  fetchGifs = () => {
    let url = giphyUrl + this.state.searchTerm + giphyKey;
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ gifs: res.data }));
  };

  handleSearchInput = term => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div>
        <GifSearch
          inputValue={this.state.searchTerm}
          handleSearchInput={this.handleSearchInput}
          handleSubmit={this.fetchGifs}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
