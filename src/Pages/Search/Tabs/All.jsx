import React from "react";
import Error from "../../../Componets/Error/Error";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ users, sort, errorAllUsers }) => {
  //сортировка
  let sortUsers = [];
  sort === "firstName"
    ? (sortUsers = users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)))
    : (sortUsers = users.sort((a, b) => (a.birthday > b.birthday ? 1 : -1)));
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? <Error /> : users.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {sortUsers.map((users, index) => (
          <User key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default All;
