import { LoadingOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classes from './Loader.module.scss';

export const Loader = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={classes.loaderWrapper}>
      <div className={`${classes.loader} ${themeContext.darkTheme ? classes.loaderDark : ''}`}>
        <LoadingOutlined style={{ fontSize: '72px' }} />
      </div>
    </div>
  );
};
