import React, { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import { api_domain } from "../constants";

// Function that points to a specific section with the API
function Race() {
  const [race, setRace] = useState(false);

  // trouble shoote way of refreshing the page and taking out specific hashRouter text
  const url = window.location.hash
    .replace(/#\/Race/, "")
    .replace(/%20/g, "-")
    .toLowerCase();

  // fetch data pull from a specifc request
  useEffect(() => {
    fetch(api_domain + "/api/races" + url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        setRace(data);
      });
  }, []);

  // Return function that displays the specific API
  return (
    <>
      {race && (
        <div>
          <h1>{race.name}</h1>
          <p>
            <b>Race Description: </b> {race.alignment}
          </p>
          <p>
            <b>Age: </b> {race.age}
          </p>
          <p>
            <b>Size: </b> {race.size_description}
          </p>
          <p>
            <b>Language: </b> {race.language_desc}
          </p>
        </div>
      )}

      {!race && <Spinner />}
    </>
  );
}

export default Race;

const styles = {};

//constructor() {
//super();
//this.state = {
//race: false,
//url: this.props.url
//}
//}
