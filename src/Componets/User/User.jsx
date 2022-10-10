import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../Assets/image/gus.svg";

// компонент пользователь

const User = ({ user, birthday, sortUser }) => {
  return (
    <div className={sortUser === "firstName" ? "user" : "user user_sort-bd"}>
      <NavLink to={`/profile/${user.id}`}>
        <div className="user__img">
          <img src={user.avatarUrl} alt={userPhoto} />
        </div>
        <div className="user__descr">
          <div className="user__name">
            {user.firstName} {user.lastName} <span>{user.userTag}</span>
          </div>
          {birthday ? (
            <div className="user__data">
              {new Date(birthday).toLocaleString("ru-ru", {
                month: "short",
                day: "numeric",
              })}
            </div>
          ) : (
            <div></div>
          )}
          <div className="user__department">{user.department}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default User;
