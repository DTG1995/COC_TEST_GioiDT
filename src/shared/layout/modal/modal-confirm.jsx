import React from "react";
import './modal.less';

export const ModalConfirm = (props) => {

  const onConfirm = () => {
    if(props.onConfirm) {
      props.onConfirm();
    }
  }
  const onCancel = () => {
    if(props.onCancel) {
      props.onCancel();
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
          </div>
          <div className="modal-content">
            {
              props.children
            }
          </div>
          <div className="modal-footer">
            <button className="btn" onClick={onCancel}>
               Cancel
            </button>
            <button  className="btn btn-submit"  onClick={onConfirm} >
              {props.submitText || "Confirm"}
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
