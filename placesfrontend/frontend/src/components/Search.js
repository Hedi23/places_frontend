import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <input
        placeholder="SEARCH"
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
