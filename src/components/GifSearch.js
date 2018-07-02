import React from "react";

class GifSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  setSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchGifs(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search for a gif!</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="gifSearch"
          value={this.state.searchTerm}
          placeholder="Search..."
          onChange={this.setSearchTerm}
        />
        <button type="submit" className="btn btn-primary">
          Find Gifts
        </button>
      </form>
    );
  }
}

export default GifSearch;
