import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Fetching from "../../../Componets/Fetching/Fetching";
import Loading from "../../../Componets/Fetching/Loading";
import User from "../../../Componets/User/User";

const All = ({ errorAllUsers, isFetching, sortUser, users }) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? (
        <Error />
      ) : isFetching ? (
        <Loading />
      ) : users.length === 2 && sortUser === "firstName" ? (
        <Loading />
      ) : null}
      <div className="tab">
        {users.length === 0 && !isFetching && !errorAllUsers ? (
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
  let usersBirthdayThisYear = users[0];
  let usersBirthdayNextYear = users[1];
  return usersBirthdayThisYear.length >= 0 &&
    usersBirthdayNextYear.length >= 0 ? (
    <>
      {usersBirthdayThisYear.map((users, index) => (
        <User key={index} users={users} />
      ))}
      <div className="divider-sort">
        <div className="divider-sort__line"></div>
        <div className="divider-sort__text">2022</div>
        <div className="divider-sort__line"></div>
      </div>
      {usersBirthdayNextYear.map((users, index) => (
        <User key={index} users={users} birthday={users.birthday} />
      ))}
    </>
  ) : (
    <Loading />
  );
};
