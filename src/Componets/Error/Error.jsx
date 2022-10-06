import React from "react";
import errorImg from "../../Assets/icons/error.svg";
import { reload } from "../../utils";

const Error = () => {
  return (
    <div className="error">
      <img className="error__img" src={errorImg} alt="error" />
      <div className="error__title">Какой-то сверхразум все сломал</div>
      <div className="error__subtitle">Постараемся быстро починить</div>
      <div className="error__refresh" onClick={reload}>
        Попробовать снова
      </div>
    </div>
  );
};

export default Error;
