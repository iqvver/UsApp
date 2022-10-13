import React from "react";
import { useNavigate } from "react-router-dom";
import { getNumberOfYears } from "../../Utils/utils";

//страница детали
const ProfileUser = ({
  star,
  phone,
  chevron,
  userPhoto,
  userId,
  usersList,
  usersBirthdayNextYear,
  usersBirthdayThisYear,
}) => {
  const navigate = useNavigate();
  if (usersList.length === 0) {
    usersList = usersBirthdayNextYear;
  } else if (usersBirthdayNextYear === 0) {
    usersList += usersBirthdayThisYear;
  }
  debugger;
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
                src={
                  usersList[userId].avatarUrl
                    ? usersList[userId].avatarUrl
                    : userPhoto
                }
                alt="photo"
              />
            </div>
            <div className="profile__descr">
              <div className="profile__name">
                {usersList[userId].firstName} {usersList[userId].lastName}{" "}
                <span>{usersList[userId].userTag}</span>
              </div>
              <div className="profile__department">
                {usersList[userId].department}
              </div>
            </div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__age">
            <img src={star} alt="star" />
            <div className="profile__age-data">
              {usersList[userId].birthday}
            </div>
            <div className="profile__age-day">
              {getNumberOfYears(usersList[userId])} лет
            </div>
          </div>
          <div className="profile__phone">
            <img src={phone} alt="phone" />
            <a
              href={"tel:" + usersList[userId].phone}
              className="profile__phone-num"
            >
              {usersList[userId].phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
