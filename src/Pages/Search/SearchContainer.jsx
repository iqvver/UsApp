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
import { connect } from "react-redux";
import { compose } from "redux";

const SearchContainer = (props) => {
  React.useEffect(() => {
    props.getUsers(props.users);
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
            path="all"
            element={
              <All users={props.users} isFetching={props.isFetching} sort={sort} />
            }
          />
          <Route path="analysts" element={<Analysts />} />
          <Route path="android" element={<Android />} />
          <Route path="designers" element={<Designers />} />
          <Route path="ios" element={<Ios />} />
          <Route path="managers" element={<Managers />} />
        </Routes>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
  };
};
export default compose(connect(mapStateToProps, { getUsers }))(SearchContainer);
