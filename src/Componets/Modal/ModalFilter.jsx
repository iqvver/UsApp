import React from "react";
import close from "../../Assets/icons/close.svg";

const ModalFilter = () => {
  return (
    <div className="modal">
      <div className="modal__title">Сортировка</div>
      <div className="modal__close">
        <button>
          <img src={close} alt="close" />
        </button>
      </div>
      <form className="modal__body">
        <p>
          <input type="radio" name="alphabet" value="alphabet" />
          <label for="alphabet">По алфавиту</label>
        </p>
        <p>
          <input type="radio" name="birthday" value="birthday" />
          <label for="birthday">По дню рождения</label>
        </p>
      </form>
    </div>
  );
};

export default ModalFilter;
