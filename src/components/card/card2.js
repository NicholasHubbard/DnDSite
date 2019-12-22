import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import tieflingImg from "../../images/spells.png";

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
      <CardActionArea href="/Spells/">
        <CardMedia
          className={classes.media}
          style={{ backgroundPosition: "center top" }}
          image={tieflingImg}
          title="Spells"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Spells
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Search through all the spells that are within the realm of Dungeons
            & Dragons 5th edition. Also create your own spells with our new
            spell creation system.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonLoc}>
        <Button size="large" color="primary" href="/Spells/">
          See All Spells
        </Button>
      </CardActions>
    </Card>
  );
}
