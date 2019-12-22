import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../images/dndHome.jpg";
import carousel2 from "../../images/dndLink.jpg";
import carousel3 from "../../images/critRole.jpg";
import Button from "@material-ui/core/Button";

// Carousel to flip through the highlighted front page
class PageCarousel extends Component {
  render() {
    return (
      // Returns a carousel of three links and pictures
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        style={styles.container}
      >
        {/* Carousel link 1 */}
        <div style={styles.imgContainer}>
          <img src={carousel1} alt="first slide" style={styles.imgStyle} />
          <Button
            className="legend"
            style={styles.typography}
            href="https://dnd.wizards.com/"
          >
            Check out the Full DND 5th Edition
          </Button>
        </div>
        {/* Carousel link 2 */}
        <div style={styles.imgContainer}>
          <img src={carousel2} alt="second slide" style={styles.imgStyle} />
          <Button
            className="legend"
            style={styles.typography}
            href="https://www.amazon.com/Dungeons-Dragons-Gaming-Books/b?ie=UTF8&node=16215"
          >
            Order Books NOW!
          </Button>
        </div>
        {/* Carousel link 3 */}
        <div style={styles.imgContainer}>
          <img src={carousel3} alt="thrid slide" style={styles.imgStyle} />
          <Button
            className="legend"
            style={styles.typography}
            href="https://critrole.com/"
          >
            Check out Critical Role
          </Button>
        </div>
      </Carousel>
    );
  }
}

export default PageCarousel;

// Styles used for this component
const styles = {
  container: {
    marginTop: "5rem"
  },
  imgContainer: {
    width: "100%",
    height: "300px",
    position: "relative"
  },
  imgStyle: {
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
    textAlign: "center",
    position: "relative"
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px"
  }
};
