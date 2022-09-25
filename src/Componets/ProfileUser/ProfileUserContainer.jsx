import * as React from "react";
import ProfileUser from "./ProfileUser";
import star from "../../Assets/icons/star.svg";
import phone from "../../Assets/icons/phone.svg";
import chevron from "../../Assets/icons/chevron.svg";
import { getProfileUser } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Fetching from "../Fetching/Fetching";

const ProfileUserContainer = (props) => {
  let { userId } = useParams();
  React.useEffect(() => {
    props.getProfileUser(userId);
  }, [userId]);
  
  return (
    <>
      {props.userProfile ? (
        <div>
          <ProfileUser
            star={star}
            phone={phone}
            chevron={chevron}
            userProfile={props.userProfile}
          />
        </div>
      ) : (
        <Fetching />
      )}
    </>
  );
};

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

export default compose(connect(mapStateToProps, { getProfileUser }))(
  ProfileUserContainer
);
