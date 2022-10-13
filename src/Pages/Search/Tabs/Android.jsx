import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

//страница департамента андройд
const Android = ({ androidList }) => {
  return (
    <>
      {androidList.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {androidList.map((user, index) => (
          <User index={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default Android;
