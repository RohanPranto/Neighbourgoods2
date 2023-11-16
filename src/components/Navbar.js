import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Corrected import
import {
  faShoppingCart,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/Navbar.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link
      style={{ padding: "10px 35px", borderRadius: 25 }}
      className="nav-link login-button"
      to="/"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Link>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link
      className="nav-link login-button"
      style={{ padding: "10px 35px", borderRadius: 25 }}
      to="/"
      onClick={() =>
        logout({
          // @ts-ignore
          returnTo: window.location.origin,
        })
      }
    >
      <FontAwesomeIcon className="mx-1" icon={faSignOutAlt} />
      Logout
    </Link>
  );
};

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          NeighbourGoods!
        </Link>
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
          <ul
            className="navbar-nav mid-nav"
            style={{ marginRight: "auto", marginLeft: "auto" }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SOLUTION
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/buy">
                      Buy pre-loved goods<i className='bx bx-up-arrow-alt' ></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sell">
                      Sell your goods<i className='bx bx-up-arrow-alt' ></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ridesharing">
                      Share Ride<i className='bx bx-up-arrow-alt' ></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trade">
                    Trade / Rent goods<i className='bx bx-up-arrow-alt' ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                CART
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav nav-2">
            <li className="nav-item d-flex">
              {isAuthenticated && (
                <Link className="nav-link m-0">
                  <FontAwesomeIcon className="mx-1" icon={faUser} />
                  {user?.nickname || user?.name || "User"}
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