// import { UserOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { OwnerType } from '../../types/dummyAPIResponses';
import classes from './UserCard.module.scss';

export const UserCard = ({
  id,
  title,
  firstName,
  lastName,
  picture,
}:OwnerType) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`${classes.userCard} ${themeContext.darkTheme ? classes.userCardDark : ''}`}>
      <div className={classes.userCard__user}>
        {/* <Avatar icon={<UserOutlined />} size="large" /> */}
        <img className={classes.userCard__image} alt={id} src={picture} />
        <div className={classes.userCard__userDesc}>
          <span className={classes.userCard__userName}>
            {title}
            {'. '}
            {firstName}
            {' '}
            {lastName}
          </span>
        </div>
      </div>
    </div>
  );
};
