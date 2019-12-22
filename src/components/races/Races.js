import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Races extends Component {
  constructor() {
    super();
    this.state = {
      races: []
    };
  }

  // Fetch function
  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/races/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let races = data.results.map(race => {
          return (
            <Button style={styles.main}>
              {/* Navlink that will take the race picked to the Races specific page */}
              <NavLink
                style={{ textDecoration: "none", width: "100%" }}
                to={{
                  pathname: "/Race/" + race.name,
                  state: {
                    raceURL: race.url
                  }
                }}
                key={race.name}
              >
                <p style={styles.anchor}>{race.name}</p>
              </NavLink>
            </Button>
          );
        });
        this.setState({ races: races });

        console.log("state", this.state.races);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.races}</div>
      </div>
    );
  }
}

export default Races;

const styles = {
  anchor: {
    fontSize: "2em",
    color: "black",
    textDecoration: "none",
    paddingLeft: "2em"
  },
  main: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2",
    width: "80%",
    margin: "2em 8em 2em 8em",
    padding: "0.5em",
    borderColor: "grey",
    borderStyle: "groove",
    boxShadow: "10px 5px 5px grey",
    "&:hover": {
      backgroundColor: "blue"
    }
  }
};
