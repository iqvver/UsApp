import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const Analysts = ({ analytics }) => {
  return (
    <>
      {analytics.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {analytics.map((users, index) => (
          <User key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Analysts;
