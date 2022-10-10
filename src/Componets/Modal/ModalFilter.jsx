import React from "react";
import close from "../../Assets/icons/close.svg";

// модальное окно для переключения режима сортировки

const ModalFilter = ({ switchActiv, switchSort, sortUser }) => {
  //хук сортировки поимени
  let setSortFirstName = () => {
    switchSort("firstName");
    switchActiv(false);
  };
  //хук сортировки по днюрождения
  let setSortBirtday = () => {
    switchSort("birthday");
    switchActiv(false);
  };
  return (
    <div className="modal">
      <div className="modal__title">Сортировка</div>
      <div className="modal__close">
        <button onClick={() => switchActiv(false)}>
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="modal__body">
        <div
          className={
            sortUser === "firstName"
              ? "modal__btm modal__btm_active"
              : "modal__btm"
          }
          onClick={() => setSortFirstName()}
        >
          <label>По алфавиту</label>
        </div>
        <div
          className={
            sortUser === "birthday"
              ? "modal__btm modal__btm_active"
              : "modal__btm"
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
