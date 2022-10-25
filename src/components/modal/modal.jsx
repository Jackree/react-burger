import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import { useDispatch } from 'react-redux';
import { REMOVE_MODAL_INGREDIENT } from '../../services/actions/ingredient';
import { DELETE_ORDER_ITEM } from '../../services/actions/order';


const modalRoot = document.getElementById('modal');

function Modal({ children, title = '', closeModal, modalType }) {
  const dispatch = useDispatch();

  const removeModal = () => {
    closeModal();
    clearModal();
  }

  const clearModal = useCallback(() => {
    if (modalType === 'ingredient') {
      dispatch({ type: REMOVE_MODAL_INGREDIENT });
    } else {
      dispatch({ type: DELETE_ORDER_ITEM });
    }
  }, [dispatch, modalType]);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Escape') {
        removeModal();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const modalElement = (
    <div className={modalStyles.wrapper}>
      <ModalOverlay closeModal={removeModal} />
      <div className={`p-10 ${modalStyles.modal}`}>
        <div className={modalStyles.header}>
          {title && (
            <h2 className={`text text_type_main-large ${modalStyles.title}`}>
              {title}
            </h2>
          )}
          <div className={modalStyles.close} onClick={removeModal}>
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
  modalType: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;
