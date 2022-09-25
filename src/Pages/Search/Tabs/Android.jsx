import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

const Android = ({ android }) => {
  return (
    <>
      {android.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {android.map((users) => (
          <User users={users} />
        ))}
      </div>
    </>
  );
};

export default Android;
