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
import { getUsers, newSearchUs } from "../../redux/users-reduser";
import {
  getFilteredDesigners,
  getFilteredAnalytics,
  getFilteredManagement,
  getFilteredIos,
  getFilteredAndroid,
} from "../../redux/filter-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { getDayOfYear } from "../../utils";

const SearchContainer = (props) => {
  React.useEffect(() => {
    props.getUsers();
    props.getFilteredDesigners();
    props.getFilteredAnalytics();
    props.getFilteredManagement();
    props.getFilteredIos();
    props.getFilteredAndroid();
    props.newSearchUs(props.usName);
  }, []);
  const [modalActive, showActiv] = React.useState(false);
  const [sortUser, sortShow] = React.useState("firstName");
  const [name, setName] = React.useState(props.usName);
  let handleChange = (event) => {
    newSearchUs(event.target.value);
    setName(event.target.value);
  };
  let filterUsers = props.users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(name.toLowerCase()) ||
      user.lastName.toLowerCase().includes(name.toLowerCase()) ||
      user.userTag.toLowerCase().includes(name.toLowerCase())
    );
  });
  /*const splitted = filterUsers.reduce(
    (acc, elem) => {
      if (getDayOfYear(new Date(elem.birthday)) < getDayOfYear(new Date())) {
        acc[1].push({ ...elem, celebrated: true });
      } else {
        acc[0].push(elem);
      }
      return acc;
    },
    [[], []]
  );
  splitted[1].sort(
    (a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
  );
  console.log(splitted);*/

  filterUsers =
    sortUser === "firstName"
      ? filterUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
      : filterUsers
          .sort(
            (a, b) =>
              new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
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
            [[], []],
            
          );

  return (
    <div className="container">
      <div className="container-wrapper">
        <Search
          loop={loop}
          bar={bar}
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
            element={
              <All
                filterUsers={filterUsers}
                isFetching={props.isFetching}
                errorAllUsers={props.errorAllUsers}
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
    errorAllUsers: state.usersPage.errorAllUsers,
    isFetching: state.usersPage.isFetching,
    designers: state.filterPage.designers,
    analytics: state.filterPage.analytics,
    management: state.filterPage.management,
    ios: state.filterPage.ios,
    android: state.filterPage.android,
    usName: state.usersPage.usName,
    newSearchUs: state.usersPage.newSearchUs,
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
    newSearchUs,
  })
)(SearchContainer);
