import React from "react";

//компонента появляется при загрузке страници совсеми пользователями

const Loading = () => {
  let n = 8; //количество повторений 
  return (
    <>
      {[...Array(n)].map((e, i) => ( // отрисовка заглушек пользователей
        <LoadingForm key={i} />
      ))}
    </>
  );
};

export default Loading;

const LoadingForm = () => {
  return (
    <div className="loading">
      <div className="loading__wrapper">
        <span className="flare"></span>
        <div className="loading__img"></div>
        <div className="loading__descr">
          <div className="loading__title"></div>
          <div className="loading__subtitle"></div>
        </div>
      </div>
    </div>
  );
};
