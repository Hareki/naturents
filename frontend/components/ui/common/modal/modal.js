import DialogMUI from '@mui/material/Dialog';
import Grow from '@mui/material/Grow';
import { forwardRef } from 'react';
import scss from './modal.module.scss';

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Grow
      style={{
        transformOrigin: '50% 0 0'
      }}
      ref={ref}
      {...props}
    />
  );
});

function Modal({ children, visible, onClose }) {
  return (
    <DialogMUI
      maxWidth='xl'
      className={scss.wrapper}
      open={visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}>
      {children}
    </DialogMUI>
  );
}

export default Modal;
