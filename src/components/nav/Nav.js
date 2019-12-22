import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.container}>
      <NavLink to="/Home" style={styles.anchor}>
        Home
      </NavLink>
      <NavLink to="/Races" style={styles.anchor}>
        Races
      </NavLink>
      <NavLink to="/Spells" style={styles.anchor}>
        Spells
      </NavLink>
    </nav>
  );
};

export default Nav;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    marginLeft: "1em",
    marginTop: "3em"
  },

  anchor: {
    fontSize: "20px",
    marginBottom: "7px",
    paddingTop: "0.5em",
    color: "#16A085",
    textDecoration: "none"
  }
};
