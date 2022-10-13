import React from "react";
import Fetching from "../../../Componets/Fetching/Fetching";
import User from "../../../Componets/User/User";

//страница департамента дизайноров
const Designers = ({ designersList }) => {
  return (
    <>
      {!designersList ? <Fetching /> : null}
      <div className="tab">
        {designersList.map((user, index) => (
          <User index={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default Designers;
