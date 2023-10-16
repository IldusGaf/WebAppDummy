import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Logo from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import UserDesk from '../UserDesk/UserDesk';
import classes from './Header.module.scss';

function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={classes.header}>
      <div className={`${classes.header__container} ${themeContext.darkTheme ? classes.header__containerDark : ''}`}>
        <Logo />
        <Navbar />
        <UserDesk />
      </div>
    </header>
  );
}

export default Header;
