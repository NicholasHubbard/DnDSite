import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import tieflingImg from "../../images/monster.jpeg";

const useStyles = makeStyles({
  card: {
    maxWidth: "auto",
    backgroundColor: "white",
    margin: "0 1em 1em 0.5em",
    position: "relative",
    top: "0px"
  },
  media: {
    height: 200,
    padding: "5em 1em 5em 1em",
    position: "relative",
    top: "0px"
  },
  buttonLoc: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "2em"
  }
});

// Material UI Card that will show a highlighted section of a SPA
export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href="#/Monsters/">
        <CardMedia
          className={classes.media}
          style={{ backgroundPosition: "center top" }}
          image={tieflingImg}
          title="Monsters"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Monsters
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Search through our monsters directory to get information on each
            monster. (This is for the use of the Dungeon Master)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonLoc}>
        <Button size="large" color="primary" href="#/Monsters/">
          See All Monsters
        </Button>
      </CardActions>
    </Card>
  );
}
