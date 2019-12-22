import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";

// Function that points to a specific section with the API
function Monster() {
  const monsterURL = useLocation().state.monsterURL;
  const [monster, setMonster] = useState(false);
  const [url, setURL] = useState(monsterURL);

  // fetch data pull from a specifc request
  useEffect(() => {
    fetch(url)
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
