import React, { ReactNode } from 'react';
import './Modal.scss'; // Стилі для модального вікна

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onCancel, onConfirm, children }: ModalProps) {
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
