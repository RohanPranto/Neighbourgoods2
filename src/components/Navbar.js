import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Corrected import
import { faShoppingCart, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link className="nav-link" to="/" onClick={() => loginWithRedirect()}>Log In</Link>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link className="nav-link" to="/" onClick={() => logout({ 
// @ts-ignore
    returnTo: window.location.origin })}>
      <FontAwesomeIcon className="mx-1" icon={faSignOutAlt} />Logout
    </Link>
  );
};

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <Link to="/" className="navbar-brand">NeighbourGoods!</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/buy">Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trade">Trade</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent">Rent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ridesharing">RideSharing</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon className="mx-1" icon={faShoppingCart} />Cart
              </Link>
            </li>
            <li className="nav-item d-flex">
              {isAuthenticated && (
                <Link className="nav-link m-0">
                  <FontAwesomeIcon className="mx-1" icon={faUser} />
                  {user?.nickname || user?.name || 'User'}
                </Link>
              )}
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <LogoutButton />
              </li>
            ) : (
              <li className="nav-item">
                <LoginButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
