import React from "react";

const ProfileUser = ({ star, phone, chevron, navigate }) => {
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
                src="https://w-dog.ru/wallpapers/6/0/287878365570025/kot-play.jpg"
                alt="photo"
              />
            </div>
            <div className="profile__descr">
              <div className="profile__name">
                Алексей Миногаров <span>tag</span>
              </div>
              <div className="profile__team">Analyst</div>
            </div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__age">
            <img src={star} alt="star" />
            <div className="profile__age-data">5 июня 1996</div>
            <div className="profile__age-day">24 года</div>
          </div>
          <div className="profile__phone">
            <img src={phone} alt="phone" />
            <a href="tel:+7(999)9009090" className="profile__phone-num">
              +7 (999) 900 90 90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
