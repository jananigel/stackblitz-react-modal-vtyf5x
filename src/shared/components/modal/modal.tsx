import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

export const Modal = ({closeClick, isShow}) => {
  // const modalClassName = `${styles.modal} ${isShow ? styles.show : ''}`;
  const modalRef = useRef(null);

  const onCloseClick = () => {
    modalRef.current.classList.remove(styles.show);
    modalRef.current.addEventListener('transitionend', () => {
      closeClick();
    }, { once: true });
  };

  useEffect(() => {
    console.log('effect');
    if (isShow) {
      setTimeout(() => {
        modalRef.current.classList.add(styles.show);
      }, 0);
    }
  }, [isShow]);

  return (
    <>{createPortal(
      <div ref={ modalRef } className={ styles.modal }>
        <div className={ styles.modalContent }>
          <div className={ styles.modalHeader }>
            <h4 className={ styles.modalTitle }>Modal Title</h4>
          </div>
          <div className={ styles.modalBody }>Modal Body</div>
          <div className={ styles.modalFooter }>
            <button className={ styles.button } onClick={ onCloseClick }>Close</button>
          </div>
        </div>
      </div>,
      document.body
    )}</>
  )
}