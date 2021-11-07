import React, { Component } from "react";
import Grid from "./Grid";
import styles from "./Board.module.css";

class Board extends Component {
  render() {
    return (
      <div>
        <div className={ styles.gridContainer }>
          <div className={ styles.item0 } ><Grid value={this.props.grids[0]} onClick={() =>this.props.onClick(0)}/></div>
          <div className={ styles.item1 } ><Grid value={this.props.grids[1]} onClick={() =>this.props.onClick(1)}/></div>
          <div className={ styles.item2 } ><Grid value={this.props.grids[2]} onClick={() =>this.props.onClick(2)}/></div>
          <div className={ styles.item3 } ><Grid value={this.props.grids[3]} onClick={() =>this.props.onClick(3)}/></div>
          <div className={ styles.item4 } ><Grid value={this.props.grids[4]} onClick={() =>this.props.onClick(4)}/></div>
          <div className={ styles.item5 } ><Grid value={this.props.grids[5]} onClick={() =>this.props.onClick(5)}/></div>
          <div className={ styles.item6 } ><Grid value={this.props.grids[6]} onClick={() =>this.props.onClick(6)}/></div>
          <div className={ styles.item7 } ><Grid value={this.props.grids[7]} onClick={() =>this.props.onClick(7)}/></div>
          <div className={ styles.item8 } ><Grid value={this.props.grids[8]} onClick={() =>this.props.onClick(8)}/></div>
        </div>
      </div>
    );
  }
}

export default Board;
