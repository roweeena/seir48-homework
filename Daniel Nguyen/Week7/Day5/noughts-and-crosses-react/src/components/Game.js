import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      moveNo: 0
    };
  }

  currentPlayer() {
    return this.state.moveNo % 2 === 0 ? 'X' : 'O';
  }

  calculateWinner(squares) {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(step) {
    this.setState({ moveNo: step });
  }

  _click(i) {
    const history = this.state.history.slice(0, this.state.moveNo + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // Prevents click if the square has already been clicked, or if a winner has been detected
    if (squares[i] || this.calculateWinner(squares)) return;

    // Updates square with currentPlayer's token
    squares[i] = this.currentPlayer();

    // Immutably updates state
    this.setState({
      history: [
        ...history,
        { squares }
      ],
      moveNo: history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.moveNo];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const description = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={ move }>
          <button onClick={() => this.jumpTo(move)}>{ description }</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `${this.currentPlayer()}'s move`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ current.squares }
            onClick={ (i) => this._click(i) }
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;
