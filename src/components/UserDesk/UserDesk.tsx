import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { authCancelAction as authCancel } from '../../actions/authorization';
import { State } from '../../types/state';
import classes from './UserDesk.module.scss';

interface Props {
  loading: boolean,
  error: any,
  isAuth: boolean,
  authUser: any,
  authCancel: ()=> void,
}

const UserDesk = ({
  authUser, authCancel, isAuth, loading, error,
}:Props) => (
  <div className={classes.userDesk}>
    <div className={classes.userDesk__auth}>
      {isAuth
        ? (
          <Link to={`/user/${authUser.id}`}>
            <div className={classes.userDesk__user}>
              {/* <Avatar icon={<UserOutlined />} /> */}
              <figure className={classes.userDesk__userImage}><img alt={authUser?.firstName} src={authUser?.picture} /></figure>
              <span className={classes.userDesk__userName}>{authUser?.firstName}</span>
            </div>
          </Link>
        )
        : <Link to="/authorization"><span>Войти</span></Link>}
    </div>
    <div>
      {isAuth
        ? (
          <span onClick={() => {
            authCancel();
              <Navigate to="/authorization" />;
          }}
          >
            Выход
          </span>
        )
        : (
          <Link to="/registration"><span>Регистрация</span></Link>
        )}
    </div>
  </div>
);

export default connect((state: State) => ({
  authUser: {
    id: state.authorization.authUser.id,
    picture: state.authorization.authUser.picture,
    firstName: state.authorization.authUser.firstName,

  },
  isAuth: state.authorization.isAuth,
  loading: state.authorization.loading,
  error: state.authorization.error,
}), (dispatch) => bindActionCreators({ authCancel }, dispatch))(UserDesk);
