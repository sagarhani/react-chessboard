import React from 'react';
import './App.css';

const totalWidth = 100;
const numberOfSquares = 8;

const eachSquareSize = `${totalWidth/numberOfSquares}%`;

const squareStyle = {
  width: eachSquareSize,
  paddingBottom: eachSquareSize,
  border: 'solid #444 0.01vh'
}

class App extends React.Component {

  // To find out what should be the background color of square
  getSquareColor(i, j) {
    const odd = i % 2

    if (j % 2) {
      return odd ? "#f6f6f6" : "#444"
    }

    return odd ? "#444" : "#f6f6f6"
  }

  render() {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const background = this.getSquareColor(i, j)
        const styles = Object.assign({background}, squareStyle)
        squares.push(
          <div key={`sqaure${i}${j}`} style={styles}>
          </div>
        )
      }
    }
    return (
      <div>
        <p className="header">React Chessboard</p>
        <div className="chessboard-container">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
