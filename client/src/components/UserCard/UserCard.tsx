// import { UserOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/user/${id}`}>
        <div className={classes.userCard__user}>
          {picture ? <img className={classes.userCard__image} alt={id} src={picture} />
            : <Avatar icon={<UserOutlined />} size={96} />}
          <div className={classes.userCard__userDesc}>
            <span className={classes.userCard__userName}>
              {title && `${title}. `}
              {firstName}
              {' '}
              {lastName}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
