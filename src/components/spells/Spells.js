import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Spells class
class Spells extends Component {
  constructor() {
    super();
    this.state = {
      spells: []
    };
  }

  componentDidMount() {
    fetch("http://www.dnd5eapi.co/api/spells/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let spells = data.results.map(spell => {
          return (
            <Button style={styles.main}>
              {/* Navlink that will take the spells picked to the Spells specific page */}
              <NavLink
                style={{ textDecoration: "none", width: "100%" }}
                to={{
                  pathname: "/Spell/" + spell.name,
                  state: {
                    spellURL: spell.url
                  }
                }}
                key={spell.name}
              >
                <p style={styles.anchor}>{spell.name}</p>
              </NavLink>
            </Button>
          );
        });
        this.setState({ spells: spells });
        console.log("state", this.state.spells);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.spells}</div>
      </div>
    );
  }
}

export default Spells;

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
