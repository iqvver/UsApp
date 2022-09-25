import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const iOS = ({ ios }) => {
  return (
    <>
      {ios.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {ios.map((users) => (
          <User users={users} />
        ))}
      </div>
    </>
  );
};

export default iOS;
