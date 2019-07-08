import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: "Crissles",
          title: "Podcast host",
          age: 34
        },
        {
          name: "Kid Fury",
          age: 27,
          talent: "bursting into song"
        },
        {
          name: "Issa Rae",
          title: "Executive Producer"
        }
      ],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filteredArray(prop) {
    let arr = this.state.unFilteredArray;
    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty(prop)) {
        filteredArray.push(arr[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }

  render() {
    return (
      <div className="puzzleBox filterBojectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.filteredArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
