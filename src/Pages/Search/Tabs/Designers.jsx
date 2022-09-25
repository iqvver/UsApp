import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const Designers = ({ designers }) => {
  return (
    <>
      {designers.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {designers.map((users) => (
          <User users={users} />
        ))}
      </div>
    </>
  );
};

export default Designers;
