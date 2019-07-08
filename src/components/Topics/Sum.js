import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  handleUpdate1(value) {
    this.setState({ number1: +value });
  }

  handleUpdate2(value) {
    this.setState({ number2: +value });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          type="number"
          onClick={e => this.handleUpdate1(e.target.value)}
        />
        <input
          className="inputLine"
          type="number"
          onClick={e => this.handleUpdate2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
