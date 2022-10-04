import * as React from "react";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import All from "./Tabs/All";
import Analysts from "./Tabs/Analysts";
import Android from "./Tabs/Android";
import Designers from "./Tabs/Designers";
import Ios from "./Tabs/Ios";
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
import Loading from "../../Componets/Fetching/Loading";

const SearchContainer = (props) => {
  const [modalActive, showActiv] = React.useState(false);
  const [sortUser, sortShow] = React.useState(props.sortUsers);
  const [name, setName] = React.useState(props.searchUserName);
  let handleChange = (event) => {
    setName(event.target.value);
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

  /* простой вариант сортировки на в компоненте
  let filterUsers = props.users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(name.toLowerCase()) ||
      user.lastName.toLowerCase().includes(name.toLowerCase()) ||
      user.userTag.toLowerCase().includes(name.toLowerCase())
    );
  });

  filterUsers =
    sortUser === "firstName"
      ? filterUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
      : filterUsers
          .sort((a, b) =>
            dateToYMD(new Date(a.birthday)) >
            dateToYMD(new Date(b.birthday)) >
            0
              ? 1
              : -1
          )
          .reduce(
            (acc, elem) => {
              if (
                getDayOfYear(new Date(elem.birthday)) < getDayOfYear(new Date())
              ) {
                acc[1].push(elem);
              } else {
                acc[0].push(elem);
              }
              return acc;
            },
            [[], []]
          );
  */

  return (
    <div className="container">
      <div className="container-wrapper">
        <Search
          loop={loop}
          bar={bar}
          barBlue={barBlue}
          showActiv={showActiv}
          sortShow={sortShow}
          sortUser={sortUser}
          modalActive={modalActive}
          name={name}
          handleChange={handleChange}
        />
        <Routes>
          <Route
            path="/*"
            exact
            element={
              <All
                users={props.users}
                isFetching={props.isFetching}
                errorAllUsers={props.errorAllUsers}
                sortUser={props.sortUsers}
              />
            }
          />
          <Route
            path="analysts"
            element={<Analysts analytics={props.analytics} />}
          />
          <Route path="android" element={<Android android={props.android} />} />
          <Route
            path="designers"
            element={<Designers designers={props.designers} />}
          />
          <Route path="ios" element={<Ios ios={props.ios} />} />
          <Route
            path="managers"
            element={<Managers management={props.management} />}
          />
        </Routes>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    searchUserName: state.usersPage.searchUserName,
    newSearchUser: state.usersPage.newSearchUser,
    isFetching: state.usersPage.isFetching,

    sortUsers: state.usersPage.sortUsers,
    newSortUsers: state.usersPage.newSortUsers,

    errorAllUsers: state.usersPage.errorAllUsers,
    designers: state.filterPage.designers,
    analytics: state.filterPage.analytics,
    management: state.filterPage.management,
    ios: state.filterPage.ios,
    android: state.filterPage.android,
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
