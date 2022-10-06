import React from "react";

const NetworkError = () => {
  return (
    <div className="container">
      <div className="search search_error">
        <div className="search__title search__title_error">Поиск</div>
        <div className="search__subtitle search__subtitle_error">
          Не могу обновить данные. Проверь соединение с интернетом.
        </div>
      </div>
    </div>
  );
};

export default NetworkError;
