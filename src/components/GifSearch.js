import React from "react";

const GifSearch = props => {
  return (
    <div>
      <input value={props.inputValue} onChange={(e) => {props.handleSearchInput(e.target.value)}} />
      <button onClick={props.handleSubmit} >Search Gifs</button>
    </div>
  );
};

export default GifSearch;
