import React, { ReactNode, useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classes from './Modal.module.scss';

interface Props {
  open: boolean,
  setOpen: (value: boolean)=>void,
  children: ReactNode,
}

export const Modal = ({ open, setOpen, children }:Props) => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`${classes.modal} ${open ? classes.modalActive : ''}`} onClick={() => { setOpen(false); }}>
      <span className={classes.modal__close}>&times;</span>
      <div className={`${classes.modal__content} ${themeContext.darkTheme ? classes.modal__contentDark : ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
