// Name: Nicholas Hubbard (Class: P&P V: 1219)

import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import PageCarousel from "./components/pageCarousel/PageCarousel";
import Races from "./components/races/Races";
import Race from "./components/races/Race";
import Spells from "./components/spells/Spells";
import Spell from "./components/spells/Spell";
import Monsters from "./components/monsters/Monsters";
import Monster from "./components/monsters/Monster";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import SearchSpell from "./components/search/SearchSpell";
import SearchMonster from "./components/search/SearchMonster";
import Paper from "@material-ui/core/Paper";
import BackgroundImg1 from "./images/critRole.jpg";
import BackgroundImg2 from "./images/spells.png";
import BackgroundImg3 from "./images/monster.jpeg";
import Card1 from "./components/card/card1";
import Card2 from "./components/card/card2";
import Card3 from "./components/card/card3";

function App() {
  return (
    // App page that creates the router layout for each section clicked on
    <HashRouter style={styles.backdrop}>
      <Header />
      <main>
        {/* Switch plug in that lets the SPA switch between each page within the app */}
        <Switch>
          {/* Home Page */}
          <Route path="/Home">
            <PageCarousel />

            {/* used cards as the highlight navigation for the home page */}
            <div style={{ margin: "3em 2em 2em 2em" }}>
              <Card1 />
            </div>
            <div style={{ margin: "2em 2em 2em 2em" }}>
              <Card2 />
            </div>
            <div style={{ margin: "2em 2em 2em 2em" }}>
              <Card3 />
            </div>
          </Route>

          {/* Races page */}
          <Route path="#/Races">
            <Paper style={styles.mainSearch1}>
              <h1 style={styles.anchor3}>Dungeons and Dragons Races</h1>
            </Paper>
            <Search />
            <Races />
          </Route>

          {/* Race specific page */}
          <Route path="#/Race">
            <Paper style={styles.main}>
              <Race />
            </Paper>
          </Route>

          {/* Spells Page */}
          <Route path="#/Spells">
            <Paper style={styles.mainSearch2}>
              <h1 style={styles.anchor3}>Dungeons and Dragons Spells</h1>
            </Paper>
            <SearchSpell />
            <Spells />
          </Route>

          {/* Spell specific page */}
          <Route path="#/Spell">
            <Paper style={styles.main}>
              <Spell />
            </Paper>
          </Route>

          {/* Monsters Page */}
          <Route path="#/Monsters">
            <Paper style={styles.mainSearch3}>
              <h1 style={styles.anchor3}>Dungeons and Dragons Monsters</h1>
            </Paper>
            <SearchMonster />
            <Monsters />
          </Route>

          {/* Monster specific page */}
          <Route path="#/Monster">
            <Paper style={styles.main}>
              <Monster />
            </Paper>
          </Route>
        </Switch>
      </main>
      {/*<Footer />*/}
    </HashRouter>
  );
}

export default App;

const styles = {
  backdrop: {
    backgroundColor: "#f6f6f6"
  },

  main: {
    backgroundColor: "#F2F2F2",
    margin: "2em 8em 2em 8em",
    padding: "2em",
    boxShadow: "10px 5px 5px grey"
  },

  mainSearch1: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "4em",
    background: "linear-gradiant(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BackgroundImg1})`,
    backgroundColor: "black",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top"
  },

  mainSearch2: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "4em",
    background: "linear-gradiant(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BackgroundImg2})`,
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top"
  },

  mainSearch3: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "4em",
    background: "linear-gradiant(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BackgroundImg3})`,
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top"
  },

  nav: {
    color: "black",
    width: "100%",
    marginLeft: "2%",
    marginBottom: "2%"
  },

  ads: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  box: {
    backgroundColor: "grey",
    margin: "0 1em 1em 0.5em",
    wordWrap: "break-word",
    padding: "5em 1em 5em 1em"
  },
  anchor3: {
    fontSize: "2.5em",
    color: "white",
    fontStyle: "bold",
    paddingLeft: "2em",
    textShadow: "1px 1px 2px black"
  }
};
