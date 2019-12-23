import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";

// function that will create a search mechanism the will go through all the spells depending
// on what the user types
function Spell() {
  const [keyword, setKeyword] = useState("");
  const [spellData, setSpellData] = useState([]);

  // API pull that will have the data on hand when searching
  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells/")
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
        setSpellData(data.results);
      });
  }, []);

  // const that takes in the event
  const handleChange = e => {
    setKeyword(e.target.value);
  };

  console.log(spellData);

  // the list that will be returned on what data was filtered
  return (
    <div>
      {spellData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1em 1em 1em 2em"
          }}
        >
          <TextField
            id="outlined-full-width"
            label="Search Spells"
            style={{ margin: 8, width: "80%" }}
            placeholder="Search..."
            fullWidth
            margin="normal"
            value={keyword}
            onChange={handleChange}
            InputLabelProps={{}}
            variant="outlined"
          />

          <ul>
            {keyword &&
              spellData.map(spell => {
                return spell.name
                  .toUpperCase()
                  .startsWith(keyword.toUpperCase()) ? (
                  <li>
                    <NavLink
                      to={{
                        pathname: "/Spell/" + spell.name,
                        state: {
                          spellURL: spell.url
                        }
                      }}
                      key={spell.name}
                      style={{
                        textDecoration: "none",
                        color: "#16A085"
                      }}
                    >
                      <p>{spell.name}</p>
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      )}

      {!spellData && <Spinner />}
    </div>
  );
}

export default Spell;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  cssLabel: {
    color: "black"
  }
}));

const styles = {
  input: {
    height: "40px",
    width: "100%",
    border: "1px solid white",
    backgroundColor: "rgba(0,0,0,.8)",
    color: "white",
    marginTop: "0.5em",
    fontSize: "1.0em"
  }
};
