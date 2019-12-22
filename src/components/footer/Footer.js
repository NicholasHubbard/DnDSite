import React from "react";
import TitleIcon from "../../images/titleIcon.png";

const Footer = () => {
  // Quick compnent for creating the footer for the bottom of the page
  return <footer style={styles.footer}>D&D'Pedia</footer>;
};
export default Footer;

const styles = {
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#16A085",
    color: "black",
    fontFamily: "Times New Roman, Times, serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem"
  }
};
