import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utilis";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <Link to="/" className="title-container">
        <h2>Crown Clothing</h2>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            {" "}
            SIGN IN{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
