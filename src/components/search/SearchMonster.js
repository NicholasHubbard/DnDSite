import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";

function Monster() {
  const [keyword, setKeyword] = useState("");
  const [monsterData, setMonsterData] = useState([]);

  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/monsters/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        setMonsterData(data.results);
      });
  }, []);

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  console.log(monsterData);

  return (
    <div>
      {monsterData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1em 1em 1em 2em"
          }}
        >
          <TextField
            id="outlined-full-width"
            label="Search Monsters"
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
              monsterData.map(monster => {
                return monster.name
                  .toUpperCase()
                  .startsWith(keyword.toUpperCase()) ? (
                  <li>
                    <NavLink
                      to={{
                        pathname: "/Monster/" + monster.name,
                        state: {
                          monsterURL: monster.url
                        }
                      }}
                      key={monster.name}
                      style={{
                        textDecoration: "none",
                        color: "#16A085"
                      }}
                    >
                      <p>{monster.name}</p>
                    </NavLink>
                  </li>
                ) : null;
              })}
          </ul>
        </div>
      )}

      {!monsterData && <Spinner />}
    </div>
  );
}

export default Monster;

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

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
