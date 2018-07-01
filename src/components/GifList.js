import React from "react";

export default class GifList extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.gifList.map(gif => {
						return (
							<li>
								<img src={gif.embed_url} alt="gif" />
							</li>
						);
					})}{" "}
				</ul>
			</div>
		);
	}
}
