import { FC, Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

const Backdrop:FC<{ onClose: () => void }> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}/>;
};

const ModalOverlay:FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement: Element | null = document.getElementById('overlays');

const Modal: FC<{ children: ReactNode, onClose: () => void }> = ({ children, onClose }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement!)}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};

export default Modal;