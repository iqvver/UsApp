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
import { getUsers } from "../../redux/users-reduser";
import {
  getFilteredDesigners,
  getFilteredAnalytics,
  getFilteredManagement,
  getFilteredIos,
  getFilteredAndroid,
} from "../../redux/filter-reduser";
import { connect } from "react-redux";
import { compose } from "redux";

const SearchContainer = (props) => {
  React.useEffect(() => {
    props.getUsers();
    props.getFilteredDesigners();
    props.getFilteredAnalytics();
    props.getFilteredManagement();
    props.getFilteredIos();
    props.getFilteredAndroid();
  }, []);
  const [modalActive, showActiv] = React.useState(false);
  const [sort, sortShow] = React.useState("firstName");
  return (
    <div className="container">
      <div className="container-wrapper">
        <Search
          loop={loop}
          bar={bar}
          showActiv={showActiv}
          sortShow={sortShow}
          sort={sort}
          modalActive={modalActive}
        />
        <Routes>
          <Route
            path="/*"
            element={
              <All
                users={props.users}
                sort={sort}
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
  })
)(SearchContainer);
