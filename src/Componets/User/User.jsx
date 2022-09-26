import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../Assets/image/gus.svg";

const User = ({ users }) => {
  return (
    <div className="user">
      <NavLink to={`/profile/${users.id}`}>
        <div className="user__img">
          <img src={users.avatarUrl} alt={userPhoto} />
        </div>
        <div className="user__descr">
          <div className="user__name">
            {users.firstName} {''}
            {users.lastName} <span>{users.userTag}</span>
          </div>
          <div className="user__team">{users.department}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default User;
