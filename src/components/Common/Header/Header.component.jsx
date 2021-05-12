import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => (
  <AppBar position="sticky" className="navbar">
    <Toolbar className="navbar__container">
      <Link to="/" className="navbar__title-link text-white">
        <h1 variant="h4" color="inherit" className="navbar__title">
          Basketball Leagues
        </h1>
      </Link>
      <div>
        <Link to="/leagues" className="navbar__item">
          <Typography
            variant="button"
            color="inherit"
            style={{ fontWeight: "bold" }}
          >
            Leagues
          </Typography>
        </Link>
        <Link to="/teams" className="navbar__item">
          <Typography
            variant="button"
            color="inherit"
            style={{ fontWeight: "bold" }}
          >
            Teams
          </Typography>
        </Link>
        <Link to="/players" className="navbar__item">
          <Typography
            variant="button"
            color="inherit"
            style={{ fontWeight: "bold" }}
          >
            Players
          </Typography>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);

Header.displayName = "Header";

export default Header;
