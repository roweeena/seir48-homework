import React, { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div className="grids" onClick={ () => this.props.onClick() }>
        { this.props.value }
      </div>
    );
  }
}

export default Grid;
