import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ errorAllUsers, filterUsers }) => {
  if (filterUsers.length === 0) return <ErrorSearch />;
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? (
        <Error />
      ) : filterUsers.length === 0 ? (
        <Fetching />
      ) : null}
      <div className="tab">
        {filterUsers.map((users, index) => (
          <User key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default All;
