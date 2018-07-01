import React from "react";

export default class GifSearch extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					<input type="text" placeholder="Search for a tag" />
					<input type="submit" value="Search" />
				</form>
			</div>
		);
	}
}
