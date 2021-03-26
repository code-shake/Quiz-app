import React, { Component, createContext } from "react";

export const Context = createContext();

export default class Rontext extends Component {
  state = {
    filteredQus: "",
  };
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
