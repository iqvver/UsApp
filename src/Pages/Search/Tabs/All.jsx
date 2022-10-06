import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Loading from "../../../Componets/Fetching/Loading";
import User from "../../../Componets/User/User";

//страница со всеми пользователями
//и переключением между режиамами сортировка

const All = ({ errorAllUsers, isFetching, sortUser, usersList }) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? (
        <Error />
      ) : isFetching ? (
        <Loading />
      ) : usersList.length === 2 && sortUser === "firstName" ? (
        <Loading />
      ) : null}
      <div className="tab">
        {usersList.length === 0 && !isFetching && !errorAllUsers ? (
          <ErrorSearch />
        ) : sortUser === "firstName" ? (
          usersList.map((user, index) => <User key={index} user={user} />)
        ) : usersList[1].length === 0 && usersList[0].length === 0 ? (
          <ErrorSearch />
        ) : (
          <AllSortBd usersList={usersList} />
        )}
      </div>
    </>
  );
};
export default All;

const AllSortBd = ({ usersList }) => {
  //если выбран режим сортировка по дгюрождения
  let usersBirthdayThisYear = usersList[0];
  let usersBirthdayNextYear = usersList[1];
  return usersBirthdayThisYear.length >= 0 &&
    usersBirthdayNextYear.length >= 0 ? (
    <>
      {usersBirthdayThisYear.map((user, index) => (
        <User key={index} user={user} />
      ))}
      <div className="divider-sort">
        <div className="divider-sort__line"></div>
        <div className="divider-sort__text">2022</div>
        <div className="divider-sort__line"></div>
      </div>
      {usersBirthdayNextYear.map((user, index) => (
        <User key={index} user={user} birthday={user.birthday} />
      ))}
    </>
  ) : (
    <Loading />
  );
};
