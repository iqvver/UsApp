import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

//страница департамента менеджеров
const Managers = ({ managementList }) => {
  return (
    <>
      {!managementList ? <Fetching /> : null}
      <div className="tab">
        {managementList.map((user, index) => (
          <User index={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default Managers;
