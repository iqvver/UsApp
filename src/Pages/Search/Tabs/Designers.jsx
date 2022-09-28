import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const Designers = ({ designers }) => {
  return (
    <>
      {!designers ? <Fetching /> : null}
      <div className="tab">
        {designers.map((users, index) => (
          <User key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Designers;
