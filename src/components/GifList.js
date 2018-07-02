import React from "react";

class GifList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.gifs.map(gif => {
            return (
              <li className="list-group-item" key={gif.id}>
                <img src={gif.images.fixed_height.url} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GifList;
