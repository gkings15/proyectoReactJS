import React from "react";
import { createPortal } from "react-dom";
import CancelIcon from "@material-ui/icons/Cancel";

const Modal = (props) =>
  props.isOpen
    ? createPortal(
        <div className="modal">
          <figure onClick={props.onClose} className="modal__close">
            <CancelIcon className="modal__close-icon" />
          </figure>
          <div className="modal__container">{props.children}</div>
        </div>,
        document.getElementById("modal_player")
      )
    : "";

Modal.displayName = "Modal";

export default Modal;
