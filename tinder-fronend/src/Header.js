import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import Logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img src={Logo} className="header__logo" alt="" />

      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
