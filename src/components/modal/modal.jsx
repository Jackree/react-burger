import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modal');

function Modal({ children, title = '', closeModal }) {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [closeModal]);

  const modalElement = (
    <div className={modalStyles.wrapper}>
      <ModalOverlay closeModal={closeModal} />
      <div className={`p-10 ${modalStyles.modal}`}>
        <div className={modalStyles.header}>
          {title && (
            <h2 className={`text text_type_main-large ${modalStyles.title}`}>
              {title}
            </h2>
          )}
          <div className={modalStyles.close} onClick={closeModal}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={modalStyles.content}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalElement, modalRoot);
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
