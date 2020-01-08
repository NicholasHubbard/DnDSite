import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { api_domain } from "../constants";

// Function that points to a specific section with the API
function Spell() {
  const [spell, setSpell] = useState(false);

  // trouble shoote way of refreshing the page and taking out specific hashRouter text
  const url = window.location.hash
    .replace(/#\/Spell/, "")
    .replace(/%20/g, "-")
    .toLowerCase();

  // fetch data pull from a specifc request
  useEffect(() => {
    fetch(api_domain + "/api/spells" + url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setSpell(data);
      });
  }, []);

  // Return function that displays the specific API
  return (
    <>
      {spell && (
        <div>
          <h1>{spell.name}</h1>
          <p>
            <b>Spell Description: </b> {spell.desc}
          </p>
        </div>
      )}

      {!spell && <Spinner />}
    </>
  );
}

export default Spell;

const styles = {};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
