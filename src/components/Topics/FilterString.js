import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: ["Philip", "Ismail", "Ali", "Vineeth", "Lopez"],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filterArray(userInput) {
    let unFiltered = this.state.unfilteredArray;
    let filteredArray = [];

    for (let i = 0; i < unFiltered.length; i++) {
      if (unFiltered[i].includes(userInput)) {
        filteredArray.push(unFiltered[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterString PB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={e => this.filterArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
