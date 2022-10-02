import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ errorAllUsers, filterUsers, isFetching, sortUser }) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? <Error /> : isFetching ? <Fetching /> : null}
      <div className="tab">
        {filterUsers.length === 0 && !isFetching ? (
          <ErrorSearch />
        ) : sortUser === 'firstName' ? (
          filterUsers.map((users, index) => <User key={index} users={users} />)
        ) : (
          <AllSortBd filterUsers={filterUsers} />
        )}
      </div>
    </>
  );
};
export default All;

const AllSortBd = ({ filterUsers }) => {
  return (
    <>
      {filterUsers[0].map((users, index) => (
        <User key={index} users={users} />
      ))}
      <div className="divider-sort">
        <div className="divider-sort__line"></div>
        <div className="divider-sort__text">2022</div>
        <div className="divider-sort__line"></div>
      </div>
      {filterUsers[1].map((users, index) => (
        <User key={index} users={users} birthday={users.birthday} />
      ))}
    </>
  );
};
