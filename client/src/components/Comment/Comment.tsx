import React, { useContext } from 'react';
import { format } from 'date-fns';
import { ThemeContext } from '../../contexts/ThemeContext';
import { PostCommentType } from '../../types/dummyAPIResponses';
import classes from './Comment.module.scss';

export const Comment = ({
  message,
  owner,
  publishDate,
}: PostCommentType) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`${classes.comment} ${themeContext.darkTheme ? classes.commentDark : ''}`}>
      <div className={classes.comment__user}>
        {/* <Avatar icon={<UserOutlined />} size="large" /> */}
        <figure className={classes.comment__userImage}><img alt={owner.firstName} src={owner.picture} /></figure>
        <div className={classes.comment__userDesc}>
          <span className={classes.comment__userName}>
            {owner.firstName}
            {' '}
            {owner.lastName}
          </span>
          <span className={classes.comment__userDate}>{publishDate && format(new Date(publishDate), 'dd MMMM yyyy HH:mm')}</span>
        </div>
      </div>
      <span className={classes.comment__desc}>{message}</span>
    </div>
  );
};
