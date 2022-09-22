import React from "react";
import ProfileUser from "./ProfileUser";
import star from '../../Assets/icons/star.svg'
import phone from '../../Assets/icons/phone.svg'
import chevron from '../../Assets/icons/chevron.svg'
import { useNavigate } from 'react-router-dom';

const ProfileUserContainer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ProfileUser star={star} phone={phone} chevron={chevron} navigate={navigate} />
    </div>
  );
};

export default ProfileUserContainer;
