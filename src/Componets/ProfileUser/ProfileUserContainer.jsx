import * as React from "react";
import ProfileUser from "./ProfileUser";
import star from "../../Assets/icons/star.svg";
import phone from "../../Assets/icons/phone.svg";
import chevron from "../../Assets/icons/chevron.svg";
import userPhoto from "../../Assets/image/gus.svg";
import { getProfileUser } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Fetching from "../Fetching/Fetching";
import ErrorServer from "../Errors/ErrorServer/ErrorServer";

//контейнерная компонента (HOС) для получения деталей выбранного пользователя
//и всех паретров для ее отрисовки

const ProfileUserContainer = (props) => {
  //хук получения id пользователя
  let { userId } = useParams();

  let usersList = "";
  let usersListBd = props.usersBirthdayThisYear.concat(
    props.usersBirthdayNextYear
  );
  props.usersList.length !== 0
    ? (usersList = props.usersList.find((u) => u.id === userId))
    : (usersList = usersListBd.find((u) => u.id === userId));

  return (
    <>
      {props.errorAllUsers ? (
        <ErrorServer />
      ) : props.usersList ? (
        <div>
          <ProfileUser
            star={star}
            phone={phone}
            chevron={chevron}
            userPhoto={userPhoto}
            userProfile={props.userProfile}
            userId={userId}
            usersList={usersList}
            usersBirthdayThisYear={props.usersBirthdayThisYear}
            usersBirthdayNextYear={props.usersBirthdayNextYear}
          />
        </div>
      ) : (
        <Fetching />
      )}
    </>
  );
};

//получение данных из стейта
let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  errorProfileUser: state.profilePage.errorProfileUser,

  // для получения деталей профиля использую локальные данные
  //так как через API профиль приходит всегда один и тот же
  usersList: state.usersPage.usersList,
  usersBirthdayThisYear: state.usersPage.usersBirthdayThisYear,
  usersBirthdayNextYear: state.usersPage.usersBirthdayNextYear,
  errorAllUsers: state.usersPage.errorAllUsers,
});

export default compose(connect(mapStateToProps, { getProfileUser }))(
  ProfileUserContainer
);
