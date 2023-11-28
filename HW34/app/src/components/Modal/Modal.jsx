import React from 'react';
import './Modal.scss'; // Стилі для модального вікна

function Modal({ isOpen, onCancel, onConfirm, children }) {
  if (!isOpen) return null;

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <div className='modal-actions'>
          <button onClick={onCancel}>Скасувати</button>
          <button onClick={onConfirm}>Підтвердити</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;