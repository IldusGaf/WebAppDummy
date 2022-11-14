import React, { ReactNode, SyntheticEvent, useState } from 'react';
import classes from './ComponentWithHelper.module.scss';

interface Props {
  children: ReactNode;
  comment: string
}

export const ComponentWithHelper = ({ children, comment }: Props) => {
  const [hovered, setHovered] = useState(false);
  const mouseOver = (e: SyntheticEvent) => {
    setHovered(true);
    e.stopPropagation();
  };
  const mouseOut = (e: SyntheticEvent) => {
    setHovered(false);
    e.stopPropagation();
  };
  return (
    <div
      className={classes.componentWithHelper}
      onMouseOut={mouseOut}
      onMouseOver={mouseOver}
    >
      {hovered && (
      <div className={classes.componentWithHelper__helper}>
        {comment}
      </div>
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {children}
    </div>
  );
};
