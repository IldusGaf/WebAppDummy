import React, { useContext } from 'react';
import { Switch } from 'antd';
import classes from './Footer.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

function Footer() {
  const themeContext = useContext(ThemeContext);
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__container} ${themeContext.darkTheme ? classes.footer__containerDark : ''}`}>
        <span>Delta World &copy; 2022</span>
        <div className={classes.footer__switch}>
          <span>Темная тема</span>
          <Switch checked={themeContext.darkTheme} onClick={themeContext.toggleTheme} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
