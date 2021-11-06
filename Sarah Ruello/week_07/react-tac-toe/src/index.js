import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  // onClick prop on the built-in DOM <button> component tells React to set up a
  // click event listener.
  // passing function as onClick prop using arrow. will prevent autofiring on render:
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    // set the Board’s initial state to contain an array of 9 nulls corresponding to the squares:
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  /* state is stored in the Board component instead of the individual Square components, 
   allowing it to determine winner */
  handleClick(i) {
    // call .slice() to create a copy of the squares array to modify - immutability.
    // Immutable data can easily determine if changes have been made, which helps
    // to determine when a component requires re - rendering.
    const squares = this.state.squares.slice();
    // return early by ignoring a click if someone has won the game or if a Square is already filled:
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // flip token depending on boolean xIsNext:
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i) {
    // pass down a function from the Board to the Square, have Square call that
    // function when a square is clicked
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
