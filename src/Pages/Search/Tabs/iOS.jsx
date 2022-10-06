import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

//страница департамента айос
const iOS = ({ iosList }) => {
  return (
    <>
      {iosList.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {iosList.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default iOS;
