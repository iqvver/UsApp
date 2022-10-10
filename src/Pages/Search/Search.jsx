import React from "react";
import { NavLink } from "react-router-dom";
import ModalFilter from "../../Componets/Modal/ModalFilter";
import NetworkError from "../../Componets/Errors/ErrorNetwork/ErrorNetwork";

//компонента находится вверху экрана с поле для поиска с иконкой «Поиск», кнопкой «Сортировка» и панелью вкладок.
const Search = ({
  loop,
  bar,
  barBlue,
  modalActive,
  switchActiv,
  sortUser,
  switchSort,
  name,
  handleChange,
  isOnline,
}) => {
  return (
    <>
      <div className={modalActive ? "menu menu_active" : "menu"}>
        <ModalFilter
          switchActiv={switchActiv}
          switchSort={switchSort}
          sortUser={sortUser}
        />
        <div className="menu__overlay" onClick={() => switchActiv(false)}></div>
      </div>
      <div className="container">
        <div className="search">
          {isOnline ? (
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
                    type="search"
                    placeholder="Введи имя, тег..."
                    pattern="[a-zA-Z]+"
                    maxlength="18"
                  />
                  <span className="search__form-error">
                    Введены не допустимые символы для поска
                  </span>
                </div>
                <div className="search__form-btn">
                  <button onClick={() => switchActiv(true)}>
                    <img
                      className="search__form-btn__img search__form-btn__img_active"
                      src={sortUser === "birthday" ? barBlue : bar}
                      alt="bar"
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <NetworkError />
          )}
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
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default Search;
