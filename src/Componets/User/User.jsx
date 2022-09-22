import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../Assets/image/gus.svg";

const User = () => {
  return (
    <NavLink to={"/profile"}>
      <div className="user">
        <div className="user__img">
          <img
            src="https://w-dog.ru/wallpapers/6/0/287878365570025/kot-play.jpg"
            alt="photo"
          />
        </div>
        <div className="user__descr">
          <div className="user__name">
            Алексей Миногаров <span>tag</span>
          </div>
          <div className="user__team">Analyst</div>
        </div>
      </div>
    </NavLink>
  );
};

export default User;
