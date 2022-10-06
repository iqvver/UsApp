import React from "react";
import { NavLink } from "react-router-dom";
import ModalFilter from "../../Componets/Modal/ModalFilter";
import NetworkError from "../../Componets/NetworkError/NetworkError";
const Search = ({
  loop,
  bar,
  barBlue,
  modalActive,
  showActiv,
  sortUser,
  sortShow,
  name,
  handleChange,
  isOnline,
}) => {
  return (
    <>
      <div className={modalActive ? "menu menu_active" : "menu"}>
        <ModalFilter
          showActiv={showActiv}
          sortShow={sortShow}
          sortUser={sortUser}
        />
        <div className="menu__overlay" onClick={() => showActiv(false)}></div>
      </div>
      <div className="container">
        <div className="search">
          {isOnline ?
          <div className="search__wrapper">
            <div className="search__title">Поиск</div>
            <div className="search__form">
              <img src={loop} alt="loop" className="search__form-loop" />
              <div className="search__form-input">
                <input
                  onChange={(event) => handleChange(event)}
                  name="search"
                  id="search"
                  value={name}
                  type="text"
                  placeholder="Введи имя, тег..."
                />
              </div>
              <div className="search__form-btn">
                <button onClick={() => showActiv(true)}>
                  <img
                    className="search__form-btn__img search__form-btn__img_active"
                    src={sortUser === "birthday" ? barBlue : bar}
                    alt="bar"
                  />
                </button>
              </div>
            </div>
          </div>
          : <NetworkError />
}
          <div className="search__nav">
            <NavLink
              to={"all"}
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
