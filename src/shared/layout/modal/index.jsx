import React from "react";
import { Icons } from "../icons";
import './modal.less';

export const Modal = (props) => {

  const onSubmit = () => {
    if(props.onSubmit) {
      props.onSubmit();
    }
  }
  const onClose = () => {
    if(props.onClose) {
      props.onClose();
    }
  }

  return (
    props.show ? (
      <div className="app-modal">
        <div className={`modal ${props.className}`}>
          <div className="modal-header">
            <div className="modal-title">
              <h2>{props.title}</h2>
            </div>
            <div className="close-modal">
              <Icons name="close-thick" onClick={onClose}/>
            </div>
          </div>
          <div className="modal-content">
            {
              props.children
            }
          </div>
          <div className="modal-footer">
            <button  className="btn btn-submit" type="submit" onClick={onSubmit} {...props.submitProps}>
              {props.submitText || "Submit"}
            </button>
          </div>
        </div>
      </div>
    ) : (
      <>
      </>
    )
  ) 
}
