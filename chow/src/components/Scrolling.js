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
              <h3>Scroll</h3>
          </div>
      );
  }
}

export default Scroll;