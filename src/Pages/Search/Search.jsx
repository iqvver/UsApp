import React from "react";
import { NavLink } from "react-router-dom";
import ModalFilter from "../../Componets/Modal/ModalFilter";
const Search = ({ loop, bar, modalActive, showActiv, sort, sortShow }) => {
  return (
    <>
      <div className={modalActive ? "menu menu_active" : "menu"}>
        <ModalFilter showActiv={showActiv} sortShow={sortShow} sort={sort} />
        <div className="menu__overlay" onClick={() => showActiv(false)}></div>
      </div>
      <div className="container">
        <div className="search">
          <div className="search__title">Поиск</div>
          <div className="search__form">
            <img src={loop} alt="loop" className="search__form-loop" />
            <div className="search__form-input">
              <input
                name="search"
                id="search"
                type="text"
                placeholder="Введи имя, тег, почту..."
              />
            </div>
            <div className="search__form-btn">
              <button onClick={() => showActiv(true)}>
                <img src={bar} alt="bar" />
              </button>
            </div>
          </div>
          <div className="search__nav">
            <NavLink
              to={"/all"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">Все</div>
            </NavLink>
            <NavLink
              to={"designers"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">Designers</div>
            </NavLink>
            <NavLink
              to={"analysts"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">Analysts</div>
            </NavLink>
            <NavLink
              to={"managers"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">Managers</div>
            </NavLink>
            <NavLink
              to={"ios"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">iOS</div>
            </NavLink>
            <NavLink
              to={"android"}
              className={({ isActive }) => (isActive ? "active-link" : " ")}
            >
              <div className="search__item">Android</div>
            </NavLink>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default Search;
