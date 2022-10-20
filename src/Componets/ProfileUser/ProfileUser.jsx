import React from "react";
import { useNavigate } from "react-router-dom";
import { getNumberOfYears } from "../../Utils/utils";

//страница детали
const ProfileUser = ({ star, phone, chevron, userPhoto, userProfile }) => {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__header">
          <div className="profile__back">
            <button onClick={() => navigate(-1)}>
              <img src={chevron} alt="chevron" />
            </button>
          </div>
          <div className="profile__wrapper">
            <div className="profile__img">
              <img
                src={userProfile.avatarUrl ? userProfile.avatarUrl : userPhoto}
                alt=""
              />
            </div>
            <div className="profile__descr">
              <div className="profile__name">
                {userProfile.firstName} {userProfile.lastName}{" "}
                <span>{userProfile.userTag}</span>
              </div>
              <div className="profile__department">
                {userProfile.department}
              </div>
            </div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__age">
            <img src={star} alt="star" />
            <div className="profile__age-data">{userProfile.birthday}</div>
            <div className="profile__age-day">
              {getNumberOfYears(userProfile)}
            </div>
          </div>
          <div className="profile__phone">
            <img src={phone} alt="phone" />
            <a href={"tel:" + userProfile.phone} className="profile__phone-num">
              {userProfile.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
