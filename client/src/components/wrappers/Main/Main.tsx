import React, { ReactElement } from 'react';
import classes from './Main.module.scss';

function Main({ children }: { children : ReactElement }) {
  return (
    <main className={classes.main}>
      {children}
    </main>
  );
}

export default Main;
