import * as React from "react";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import All from "./Tabs/All";
import Analysts from "./Tabs/Analysts";
import Android from "./Tabs/Android";
import Designers from "./Tabs/Designers";
import Ios from "./Tabs/iOS";
import Managers from "./Tabs/Managers";
import loop from "../../Assets/icons/loop.svg";
import bar from "../../Assets/icons/bar.svg";
import barBlue from "../../Assets/icons/barBlue.svg";
import {
  getUsers,
  newSearchUser,
  newSortUsers,
} from "../../redux/users-reduser";
import {
  getFilteredDesigners,
  getFilteredAnalytics,
  getFilteredManagement,
  getFilteredIos,
  getFilteredAndroid,
} from "../../redux/filter-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { reload } from "../../Utils/utils";

//контейнерная компонента (HOС) для получения списка пользователей,
//переход меджу вкладками(департаментами)и сортировкой меджу ними
//получение всех паретров для отрисовки

const SearchContainer = (props) => {
  //хуки обработки нействий и состояний компонетов
  const [isOnline, getNetwork] = React.useState(window.navigator.onLine);
  const [name, getName] = React.useState(props.searchUserName);
  const [modalActive, switchActiv] = React.useState(false);
  const [sortUser, switchSort] = React.useState(props.sortUsers);

  let handleChange = (event) => {
    getName(event.target.value);
    newSearchUser(event.target.value);
  };
  React.useEffect(() => {
    props.getUsers();
    props.getFilteredDesigners();
    props.getFilteredAnalytics();
    props.getFilteredManagement();
    props.getFilteredIos();
    props.getFilteredAndroid();
    props.newSearchUser(name);
    props.newSortUsers(sortUser);
  }, [name, sortUser]);

  //хук отслеживания состояния сети
  const updateNetwork = () => {
    getNetwork(window.navigator.onLine);
    reload();
  };
  React.useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  //отрисовка поля для поиска с иконкой «Поиск», кнопкой «Сортировка»
  //и панелью вкладок. При переключении между вкладками на главном экране
  return (
    <div className="container">
      <div className="container-wrapper">
        <Search
          loop={loop}
          bar={bar}
          barBlue={barBlue}
          switchActiv={switchActiv}
          switchSort={switchSort}
          sortUser={sortUser}
          modalActive={modalActive}
          name={name}
          handleChange={handleChange}
          isOnline={isOnline}
        />
        <Routes>
          <Route
            path="/*"
            exact
            element={
              <All
                usersList={props.usersList}
                usersBirthdayThisYear={props.usersBirthdayThisYear}
                usersBirthdayNextYear={props.usersBirthdayNextYear}
                isFetching={props.isFetching}
                errorAllUsers={props.errorAllUsers}
                isOnline={isOnline}
                sortUser={props.sortUsers}
                searchUserName={props.searchUserName}
              />
            }
          />
          <Route
            path="analysts"
            element={<Analysts analyticsList={props.analyticsList} />}
          />
          <Route
            path="android"
            element={<Android androidList={props.androidList} />}
          />
          <Route
            path="designers"
            element={<Designers designersList={props.designersList} />}
          />
          <Route path="ios" element={<Ios iosList={props.iosList} />} />
          <Route
            path="managers"
            element={<Managers managementList={props.managementList} />}
          />
        </Routes>
      </div>
    </div>
  );
};

//получение данных из стейта
let mapStateToProps = (state) => {
  return {
    //данные о пользователях
    usersList: state.usersPage.usersList,
    searchUserName: state.usersPage.searchUserName,
    newSearchUser: state.usersPage.newSearchUser,
    isFetching: state.usersPage.isFetching,

    //данные о сортировке пользователей
    sortUsers: state.usersPage.sortUsers,
    newSortUsers: state.usersPage.newSortUsers,
    usersBirthdayThisYear: state.usersPage.usersBirthdayThisYear,
    usersBirthdayNextYear: state.usersPage.usersBirthdayNextYear,

    // ошибка
    errorAllUsers: state.usersPage.errorAllUsers,

    //данные о департиментах
    designersList: state.filterPage.designersList,
    analyticsList: state.filterPage.analyticsList,
    managementList: state.filterPage.managementList,
    iosList: state.filterPage.iosList,
    androidList: state.filterPage.androidList,
  };
};
export default compose(
  connect(mapStateToProps, {
    getUsers,
    getFilteredDesigners,
    getFilteredAnalytics,
    getFilteredManagement,
    getFilteredIos,
    getFilteredAndroid,
    newSearchUser,
    newSortUsers,
  })
)(SearchContainer);
