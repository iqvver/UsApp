import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileUser = ({ star, phone, chevron, userProfile }) => {
  const navigate = useNavigate();
  var now = new Date(); //Текущя дата
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  var dob = new Date(userProfile[0].birthday); //Дата рождения
  var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
  var age; //Возраст
  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }
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
              <img src={userProfile[0].avatarUrl} alt="photo" />
            </div>
            <div className="profile__descr">
              <div className="profile__name">
                {userProfile[0].firstName} {userProfile[0].lastName}{" "}
                <span>{userProfile[0].userTag}</span>
              </div>
              <div className="profile__team">{userProfile[0].department}</div>
            </div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__age">
            <img src={star} alt="star" />
            <div className="profile__age-data">{userProfile[0].birthday}</div>
            <div className="profile__age-day">{age} лет</div>
          </div>
          <div className="profile__phone">
            <img src={phone} alt="phone" />
            <a
              href={"tel:" + userProfile[0].phone}
              className="profile__phone-num"
            >
              {userProfile[0].phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
