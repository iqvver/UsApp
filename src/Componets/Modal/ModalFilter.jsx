import React from "react";
import close from "../../Assets/icons/close.svg";

const ModalFilter = ({ showActiv, sortShow, sortUser }) => {
  let setSortFirstName = () => {
    sortShow("firstName");
    showActiv(false);
  };
  let setSortBirtday = () => {
    sortShow("birthday");
    showActiv(false);
  };
  return (
    <div className="modal">
      <div className="modal__title">Сортировка</div>
      <div className="modal__close">
        <button onClick={() => showActiv(false)}>
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="modal__body">
        <div
          className={
            sortUser === "firstName" ? "modal__btm modal__btm_active" : "modal__btm"
          }
          onClick={() => setSortFirstName()}
        >
          <label>По алфавиту</label>
        </div>
        <div
          className={
            sortUser === "birthday" ? "modal__btm modal__btm_active" : "modal__btm"
          }
          onClick={() => setSortBirtday()}
        >
          <label>По дню рождения</label>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
