import React from "react";
import close from "../../Assets/icons/close.svg";

const ModalFilter = ({ showActiv, sortShow, sort }) => {
  return (
    <div className="modal">
      <div className="modal__title">Сортировка</div>
      <div className="modal__close">
        <button onClick={() => showActiv(false)}>
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="modal__body">
        <p>
          <button
            className={
              sort === "firstName"
                ? "modal__btm modal__btm_active"
                : "modal__btm"
            }
            onClick={() => sortShow("firstName")}
          >
            <label>По алфавиту</label>
          </button>
        </p>
        <p>
          <button
            className={
              sort === "birthday"
                ? "modal__btm modal__btm_active"
                : "modal__btm"
            }
            onClick={() => sortShow("birthday")}
          >
            <label>По дню рождения</label>
          </button>
        </p>
      </div>
    </div>
  );
};

export default ModalFilter;
