import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  fetchGifs = query => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
      .then(res => res.json())
      .then(gifResponse =>
        this.setState({
          gifs: gifResponse.data
        })
      );
  };

  handleSearch = query => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <GifList gifs={this.state.gifs} />
          </div>
          <div className="col-md-4">
            <GifSearch
              searchTerm={this.state.searchTerm}
              searchGifs={this.handleSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GifListContainer;
