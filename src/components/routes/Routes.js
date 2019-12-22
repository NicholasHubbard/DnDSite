import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Races from "../races/Races";
import Spells from "../spells/Spells";
import Monsters from "../monsters/Monsters";

// Routes for which page to go to
const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Races" component={Races} />
      <Route path="/Spells" component={Spells} />
      <Route path="/Monsters" component={Monsters} />
    </div>
  );
};

export default Routes;
