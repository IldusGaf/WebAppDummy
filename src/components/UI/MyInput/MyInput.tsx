import React from 'react';
import classes from './MyInput.module.scss';

export const MyInput = (props: any) => (
  <input className={`${props.className ? props.className : ''} ${classes.myInput}`} {...props} />
);
