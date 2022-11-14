import React from 'react';
import classes from './InnerPage.module.scss';

export default function InnerPage({ children }:any) {
  return (
    <div className={classes.innerPage}>{children}</div>
  );
}
