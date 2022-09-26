import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const Managers = ({ management }) => {
  return (
    <>
      {management.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {management.map((users, index) => (
          <User key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Managers;
