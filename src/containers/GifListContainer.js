import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gifList: []
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		e.preventDefault();
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${
				e.target.value
			}&api_key=dc6zaTOxFJmzC&rating=g`
		)
			.then(resp => resp.json())
			.then(gifList => {
				// debugger;
				this.setState({ gifList: gifList.data });
			});
	}

	render() {
		return (
			<div>
				<GifSearch handleSubmit={this.handleSearch} />
				<GifList gifList={this.state.gifList} />
			</div>
		);
	}
}
