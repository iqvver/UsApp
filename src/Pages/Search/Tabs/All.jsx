import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ errorAllUsers, isFetching, sortUser, users }) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? (
        <Error />
      ) : isFetching ? (
        <Fetching />
      ) : users.length === 2 && sortUser === "firstName" ? (
        <Fetching />
      ) : null}
      <div className="tab">
        {users.length === 0 && !isFetching ? (
          <ErrorSearch />
        ) : sortUser === "firstName" ? (
          users.map((users, index) => <User key={index} users={users} />)
        ) : users[1].length === 0 && users[0].length === 0 ? (
          <ErrorSearch />
        ) : (
          <AllSortBd users={users} />
        )}
      </div>
    </>
  );
};
export default All;

const AllSortBd = ({ users }) => {
  return users.length === 2 ? (
    <>
      {users[0].map((users, index) => (
        <User key={index} users={users} />
      ))}
      <div className="divider-sort">
        <div className="divider-sort__line"></div>
        <div className="divider-sort__text">2022</div>
        <div className="divider-sort__line"></div>
      </div>
      {users[1].map((users, index) => (
        <User key={index} users={users} birthday={users.birthday} />
      ))}
    </>
  ) : (
    <Fetching />
  );
};
