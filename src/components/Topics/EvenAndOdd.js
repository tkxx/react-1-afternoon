import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(evenArr, oddArr, userInput) {
    super();
    this.state = {
      evenArr: [],
      oddArr: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  getEvenAndOdds(userInput) {
    let arr = userInput.split(",");
    let evens = [];
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }
    this.setState({ evenArr: evens, oddArr: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.getEvenAndOdds(this.state.userInput);
          }}
        >
          Sort
        </button>
        <span className="resultsBox">Evens: {this.state.evenArr} </span>
        <span className="resultsBox">Odds: {this.state.oddArr} </span>
      </div>
    );
  }
}

export default EvenAndOdd;
