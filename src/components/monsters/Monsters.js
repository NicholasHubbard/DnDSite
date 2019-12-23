import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Monsters extends Component {
  // Class constuctor for the creation of an array of objects pulled from an API
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  // componentDidMount that fetches data from an API
  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/monsters/")
      .then(results => {
        if (!results.ok) {
          alert(
            "API was unable to be pulled, please open your console to read why"
          );
          return;
        }
        return results.json();
      })
      .then(data => {
        let monsters = data.results.map(monster => {
          return (
            <Button style={styles.main}>
              {/* Navlink that will take the monster picked to the Monster specific page */}
              <NavLink
                style={{ textDecoration: "none", width: "100%" }}
                to={{
                  pathname: "/Monster/" + monster.name,
                  state: {
                    monsterURL: monster.url
                  }
                }}
                key={monster.name}
              >
                <p style={styles.anchor}>{monster.name}</p>
              </NavLink>
            </Button>
          );
        });
        this.setState({ monsters: monsters });

        console.log("state", this.state.monsters);
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <div>{this.state.monsters}</div>
      </div>
    );
  }
}

export default Monsters;

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
    boxShadow: "10px 5px 5px grey"
  }
};
