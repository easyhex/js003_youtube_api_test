import React, { Component } from "react"; // { x } достаёт из react.x

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <h1>{this.state.term}</h1>
        <input onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
