import React from 'react'
import './Modal.css'

function Modal({modal, setModal}) {
  const modalActiveClass = modal ? " active" : "";
  return (
    <div className={"modal" + modalActiveClass }>
      <div className="modal-wrp">
        <div className="modal-close" onClick={ () => setModal(false) }>x</div>
        <div className="modal-body">
          <b>Modal</b>
          <p>Este é um modal de teste.</p>
        </div>
      </div>
    </div>
  )
}

export default Modal