import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { I18nSelect } from "./I18nSelect";
import { LOCALES } from "../i18n/locales";

export const NavBar = ({ onSearchKeyChange, onSearchLanguage }) => {
  const [navState, setNavState] = useState({ showingSearch: false });

  const showSearchContainer = (event) => {
    event.preventDefault();
    setNavState({ showingSearch: !navState.showingSearch });
  };

  const cambiarIdioma = (event) => {
    event.preventDefault();
    let idioma = event.target.value;
    console.log(idioma);
    onSearchLanguage(idioma);
  };
  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ISIS 3710</h1>
          <nav className="menu-items">
            <div className="menu-links">
              <Link className="nav-item" aria-current="page" to="/">
                <FormattedMessage id="home" />
              </Link>
              <Link className="nav-item" aria-current="page" to="/report">
                <FormattedMessage id="report" />
              </Link>
            </div>
            <div className="menu-actions">
              <span onClick={(e) => showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </span>
              <I18nSelect></I18nSelect>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <select className="form-select" onChange={cambiarIdioma}>
                    <option value={LOCALES.SPANISH}>Español</option>
                    <option value={LOCALES.ENGLISH}>English</option>
                  </select>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={
          (navState.showingSearch ? "showing " : "") + "search-container"
        }
      >
        <input
          type="text"
          onChange={(e) => onSearchKeyChange(e.target.value)}
        />
        <span onClick={(e) => showSearchContainer(e)}>
          <i className="material-icons close">close</i>
        </span>
      </div>
    </header>
  );
};
