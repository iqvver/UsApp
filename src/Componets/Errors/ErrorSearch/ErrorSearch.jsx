import React from "react";
import errorImg from "../../../Assets/icons/errorLoop.svg";

//компонента появляется если пользователь не найден

const ErrorSearch = () => {
  return (
    <div className="error">
      <img className="error__img" src={errorImg} alt="errorSearch" />
      <div className="error__title">Мы никого не нашли</div>
      <div className="error__subtitle">Попробуй скорректировать запрос</div>
    </div>
  );
};

export default ErrorSearch;
