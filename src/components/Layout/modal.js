import React from "react";




const ModalLayout = ({ children }) => {
  return (
    <div
      id="popup-modal"
      className="modal bg-darkBlue overflow-y-auto fixed top-0 bottom-0 left-0 z-[1000] md:inset-0 h-modal md:h-full md:w-auto md:px-[8px] md:overflow-x-hidden"
    >
      <div className="modal_container grid place-items-center h-screen w-screen md:w-auto sm:p-[0px_5px]">
        <div className="modal_box w-full max-w-xl bg-[#FAFAFA] backdrop-blur-3xl p-8 rounded-3xl ">
            <div className="modal_form_box">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default ModalLayout;
