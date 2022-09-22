import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const All = ({ users, isFetching }) => {
  return (
    //показываю крутилку пока загружатся пользователи
    //пользователи загрузились, крутилка исчезает
    <>
    {isFetching ? <Fetching /> : null}
      <div className="tab">
        {users.map((users) => (
          <User users={users} />
        ))}
      </div>
    </>
  );
};

export default All;
