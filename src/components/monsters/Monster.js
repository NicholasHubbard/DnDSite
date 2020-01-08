import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { api_domain } from "../constants";

// Function that points to a specific section with the API
function Monster() {
  const [monster, setMonster] = useState(false);

  // trouble shoote way of refreshing the page and taking out specific hashRouter text
  const url = window.location.hash
    .replace(/#\/Monster/, "")
    .replace(/%20/g, "-")
    .toLowerCase();

  // fetch data pull from a specifc request
  useEffect(() => {
    fetch(api_domain + "/api/monsters" + url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setMonster(data);
      });
  }, []);

  // Return function that displays the specific API
  return (
    <>
      {monster && (
        <div>
          <h1>{monster.name}</h1>
          <p>
            <b>Hit Points: </b> {monster.hit_points}
          </p>
          <p>
            <b>Size: </b> {monster.size}
          </p>
          <p>
            <b>Armour Class: </b> {monster.armor_class}
          </p>
          <p>
            <b>Type of Monster: </b> {monster.type}
          </p>
          <p>
            <b>Alignment: </b> {monster.alignment}
          </p>
        </div>
      )}

      {!monster && <Spinner />}
    </>
  );
}

export default Monster;

const styles = {};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
