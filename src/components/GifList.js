import React from "react";

const GifList = props => {
  return (
    <div>
      {props.gifs.map(gif => (
        <div key={gif.id}>
          <div>{gif.title}</div>
          <img src={gif.images.preview_gif.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifList;
