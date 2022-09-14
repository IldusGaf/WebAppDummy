import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import classes from './UserDesk.module.scss';

export const UserDesk = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className={classes.userDesk}>
      <div className={classes.userDesk__auth}>
        {auth
          ? <span>Войти</span>
          : (
            <div className={classes.userDesk__user}>
              <Avatar icon={<UserOutlined />} />
              <span className={classes.userDesk__userName}>Name</span>
            </div>
          )}
      </div>
      <div>
        <span onClick={() => setAuth(!auth)}>Регистрация</span>
      </div>
    </div>
  );
};
