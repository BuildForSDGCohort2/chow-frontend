import React, { Component } from "react";

class Scroll extends Component {
  state = {
      hits: [],
      loading: false,
      page: 0,
      prevY: 0
  };

  render() {
      return (
          <div className="container">
              <p>Scroll Component</p>
          </div>
      );
  }
}

export default Scroll;