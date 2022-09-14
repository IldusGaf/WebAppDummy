// import { UserOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { PostType } from '../../types/dummyAPIResponses';
import classes from './PostCard.module.scss';

export const PostCard = ({
  text,
  image,
  owner,
  publishDate,
}:PostType) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`${classes.postCard} ${themeContext.darkTheme ? classes.postCardDark : ''}`}>
      <div className={classes.postCard__user}>
        {/* <Avatar icon={<UserOutlined />} size="large" /> */}
        <figure className={classes.postCard__userImage}><img alt={owner.firstName} src={owner.picture} /></figure>
        <div className={classes.postCard__userDesc}>
          <span className={classes.postCard__userName}>
            {owner.firstName}
            {' '}
            {owner.lastName}
          </span>
          <span className={classes.postCard__userDate}>{publishDate}</span>
        </div>
      </div>
      <img className={classes.postCard__image} alt="" src={image} />
      <span className={classes.postCard__desc}>{text}</span>
    </div>
  );
};
