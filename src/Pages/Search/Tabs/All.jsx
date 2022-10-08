import React from "react";
import Error from "../../../Componets/Error/Error";
import ErrorSearch from "../../../Componets/ErrorSearch/ErrorSearch";
import Loading from "../../../Componets/Fetching/Loading";
import User from "../../../Componets/User/User";

//страница со всеми пользователями
//и переключением между режиамами сортировка

const All = ({
  errorAllUsers,
  isFetching,
  sortUser,
  searchUserName,
  usersList,
  usersBirthdayThisYear,
  usersBirthdayNextYear,
}) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
      {errorAllUsers ? <Error /> : null}
      {isFetching ? <Loading /> : null}
      {usersList.length === 0 && sortUser === "firstName" ? <Loading /> : null}

      <div className="tab">
        {usersList.length === 0 &&
        searchUserName &&
        sortUser === "firstName" ? (
          <ErrorSearch />
        ) : null}

        {sortUser === "firstName" ? (
          usersList.map((user, index) => (
            <User key={index} user={user} sortUser={sortUser} />
          ))
        ) : (
          <AllSortBd
            usersBirthdayThisYear={usersBirthdayThisYear}
            usersBirthdayNextYear={usersBirthdayNextYear}
            searchUserName={searchUserName}
            sortUser={sortUser}
          />
        )}
      </div>
    </>
  );
};
export default All;

const AllSortBd = ({
  usersBirthdayThisYear,
  usersBirthdayNextYear,
  searchUserName,
  sortUser,
}) => {
  //если выбран режим сортировка по дню рождения
  return (
    <>
      {usersBirthdayThisYear.length === 0 &&
      usersBirthdayNextYear.length === 0 &&
      sortUser === "birthday" ? (
        <Loading />
      ) : null}
      {usersBirthdayThisYear.length === 0 &&
      usersBirthdayNextYear.length === 0 &&
      searchUserName ? (
        <ErrorSearch />
      ) : null}
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
  );
};
