import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

//страница департамента аналитиков
const Analysts = ({ analyticsList }) => {
  return (
    <>
      {analyticsList.length === 0 ? <Fetching /> : null}
      <div className="tab">
        {analyticsList.map((user, index) => (
          <User index={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default Analysts;
