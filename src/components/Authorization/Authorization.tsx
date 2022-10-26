/*eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { State } from '../../types/state';
import { MyInput } from '../UI/MyInput/MyInput';
import { auth, authErrorAction } from '../../actions/authorization'
import classes from './Authorization.module.scss';
import { Loader } from '../Loader/Loader';

interface Props {
  loading: boolean,
  error: any,
  auth: (idUser: string) => void,
  isAuth: boolean,
  authorizationId?: string,
  authErrorAction: (err: any) => void,
}

const Authorization = ({ authorizationId, isAuth, auth, loading, error, authErrorAction }:Props) => {
  const themeContext = useContext(ThemeContext);
  const [input, setInput] = useState('');

  const formHandler = () => {
    auth(input)
  }

  useEffect(()=>{
    authErrorAction('');
  },[])

  return (
    <div className={`${classes.authorization} ${themeContext.darkTheme ? classes.authorizationDark : ''}`}>
      <div className={classes.authorization__content}>
        {
          loading 
            ? <Loader/>  
            : <>
            <h2>Вход</h2>
            <form onSubmit={formHandler}>
              <label htmlFor="id">
                ID:
              </label>
              <MyInput
                  type="text"
                  name="id"
                  placeholder="Введите свой ID"
                  onChange={(e: any) => setInput(e.target.value)}
                  value={input}
                />
              <MyInput type="submit" value="Отправить"/>
            </form>
            <span className={classes.authorization__nonAuth}>Еще нет аккаунта? <Link to={"/registration"}>Зарегистрироваться</Link></span>
            {error && <span className={classes.authorization__error}>Проверьте корретность вводимого ID</span>}
            </>
        }
      </div>
      {isAuth && <Navigate to={`/user/${authorizationId}`}/>}
    </div>
  );
};

export default connect((state: State) => ({
  authorizationId: state.authorization.authUser.id,
  isAuth: state.authorization.isAuth,
  loading: state.authorization.loading,
  error: state.authorization.error,
}), (dispatch) => bindActionCreators({auth, authErrorAction}, dispatch))(Authorization);
