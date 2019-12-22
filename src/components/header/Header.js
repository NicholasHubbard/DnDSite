import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
import UserImage from "../../images/UserImage.png";
import TitleIcon from "../../images/titleIcon.png";
import { StylesContext } from "@material-ui/styles";

// Styles that are used for the Header
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(3)
  },
  title: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  highlight: {
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

// Plug in Header app bar from Material UI
export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [iconAnchorEl, setIconAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isIconMenuOpen = Boolean(iconAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Event handlers for sub menus that pull up depending on what you click
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleIconMenuOpen = event => {
    setIconAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleIconClose = () => {
    setIconAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </NavLink>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </NavLink>
    </Menu>
  );

  const iconId = "primary-search-icon-menu";
  const renderIconMenu = (
    <Menu
      anchorEl={iconAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={iconId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isIconMenuOpen}
      onClose={handleIconClose}
    >
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleIconClose}>Home</MenuItem>
      </NavLink>
      <NavLink
        to="/Races"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleIconClose}>Races</MenuItem>
      </NavLink>
      <NavLink
        to="/Spells"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleIconClose}>Spells</MenuItem>
      </NavLink>
      <NavLink
        to="/Monsters"
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >
        <MenuItem onClick={handleIconClose}>Monsters</MenuItem>
      </NavLink>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Facebook />
        </IconButton>
        <p>Facebook</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Twitter />
        </IconButton>
        <p>Twitter</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Instagram />
        </IconButton>
        <p>Instagram</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src={UserImage} />
        </IconButton>
        <NavLink to="">
          <p>Profile</p>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "black"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={(classes.menuButton, classes.highlight)}
            color="inherit"
            aria-label="open drawer"
            aria-haspopup="true"
            onClick={handleIconMenuOpen}
            style={{ marginLeft: "2em" }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            src={TitleIcon}
            style={{ marginLeft: "1em", marginRight: "0.5em" }}
          />
          <Typography
            className={classes.title}
            variant="h5"
            style={{ fontFamily: "Marion, times, serif", paddingTop: "0.25em" }}
          >
            D&D'Pedia
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label=""
              color="inherit"
              className={classes.highlight}
            >
              <Facebook />
            </IconButton>
            <IconButton
              aria-label=""
              color="inherit"
              className={classes.highlight}
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label=""
              color="inherit"
              className={classes.highlight}
              style={{ marginRight: "1em" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={UserImage} style={{ marginRight: "3em" }} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.highlight}
              style={{ marginRight: "1em" }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {renderMobileMenu}
      {renderMenu}
      {renderIconMenu}
    </div>
  );
}
