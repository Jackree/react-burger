import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modal');

function Modal({ children, title = '', closeModal }) {
  const closeHandler = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
  return ReactDOM.createPortal(
    <div className={modalStyles.wrapper}>
      <ModalOverlay closeModal={closeModal}></ModalOverlay>
      <div className={`p-10 ${modalStyles.modal}`}>
        <div className={modalStyles.header}>
          {title && (
            <h2 className={`text text_type_main-large ${modalStyles.title}`}>
              {title}
            </h2>
          )}
          <div className={modalStyles.close} onClick={closeHandler}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={modalStyles.content}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
