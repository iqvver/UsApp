import React from "react";
import Error from "../../../Componets/Error/Error";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ sort, errorAllUsers, filterUsers }) => {
  //сортировка
  sort === "firstName"
    ? filterUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
    : filterUsers.sort((a, b) => (a.birthday > b.birthday ? 1 : -1));
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
