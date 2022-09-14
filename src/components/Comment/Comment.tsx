import React, { useContext } from 'react';
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
          <span className={classes.comment__userDate}>{publishDate}</span>
        </div>
      </div>
      <span className={classes.comment__desc}>{message}</span>
    </div>
  );
};
