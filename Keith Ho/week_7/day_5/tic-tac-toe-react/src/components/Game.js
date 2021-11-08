import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        grids: Array(9).fill(""),
      }],
      xIsClicked: true,
      stepNumber: 0
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const grids = current.grids.slice();
    if ( winningCondition(grids) || grids[i]){
      return;
    }
    grids[i] = this.state.xIsClicked ? "X" : "O";
    this.setState({
      history: history.concat([{
        grids: grids
      }]),
      xIsClicked: !this.state.xIsClicked,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsClicked: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = winningCondition(current.grids);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move} className="btn-list">
            <button className="btn" onClick={() => this.jumpTo(move)}>{ desc }</button>
        </li>
      );
    });

    let status;
    if (winner){
      status = `Winner is ${winner}`;
    }

    return (
      <div>
        <div style={{fontSize: "30px"}}>{ status }</div>
        <div>
          <Board grids={current.grids} onClick={(i) => this.handleClick(i)}/>
        </div>
        <ol>{ moves }</ol>
      </div>
    );
  }
}

export default Game;

function  winningCondition(arr){
    const winning = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < winning.length; i ++){
      if (arr[winning[i][0]] === arr[winning[i][1]] && arr[winning[i][0]] === arr[winning[i][2]]){
        return arr[winning[i][0]];
      }
    }
    return false;
  }
