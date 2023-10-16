/*eslint-disable */
import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { auth } from '../../actions/authorization';
import { registration } from '../../actions/registsration';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserProfileTypeResponse } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import { Loader } from '../../components/Loader/Loader';
import { MyInput } from '../../components/UI/MyInput/MyInput';
import classes from './Registration.module.scss';

interface Props {
  loading: boolean,
  error: any,
  registration: (createUser: any) => void,
  auth: (idUser: string) => void,
  isAuth: boolean,
  registrationId?: string,
  authorizationId?: string,
}

const Registration = ({ registration, auth, isAuth, registrationId, authorizationId, loading, error }:Props) => {
  const themeContext = useContext(ThemeContext);
  const [inputes, setInputes] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    dateOfBirth: '',
    phone: '',
  });

  const registrationHandler = async (userData: UserProfileTypeResponse) => {
    registration(userData)
  }

  return (
    <>
    {loading 
      ? <Loader/>  
      : <>
      <div className={`${classes.registration} ${themeContext.darkTheme ? classes.registrationDark : ''}`}>
        <div className={classes.registration__content}>
          <h2>Регистрация</h2>
          <div>
          {<form onSubmit={(e)=>{
            e.preventDefault();
            registrationHandler(inputes)
          }}>
            <label>
                Фамилия:
                <MyInput
                  className={`${classes.registration__inputText} ${themeContext.darkTheme ? classes.registration__inputTextDark : ''}`}
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      firstName: e.target.value,
                    },
                  )}
                />
              </label>
              <label>
                Имя:
                <MyInput
                  className={`${classes.registration__inputText} ${themeContext.darkTheme ? classes.registration__inputTextDark : ''}`}
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      lastName: e.target.value,
                    },
                  )}
                />
              </label>
              <div className={classes.registration__gender}>
                Пол:
                <div>
                  <label>
                    <input type="radio" name="radio" value="male"
                  checked={inputes.gender == 'male' }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      gender: e.target.value,
                    })} />
                    {' '}Мужской
                  </label>
                  <label>
                    <input type="radio" name="radio" value="female"
                  checked={inputes.gender == 'female' }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      gender: e.target.value,
                    })} />
                    {' '}Женский
                  </label>
                </div>
              </div>
              <label>
                Дата рождения:
                <MyInput
                  className={`${classes.registration__inputText} ${themeContext.darkTheme ? classes.registration__inputTextDark : ''}`}
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      dateOfBirth: e.target.value,
                    },
                  )}
                />
              </label>
              <label>
                Email:
                <MyInput
                  className={`${classes.registration__inputText} ${themeContext.darkTheme ? classes.registration__inputTextDark : ''}`}
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      email: e.target.value,
                    },
                  )}
                />
              </label>
              <label>
                Телефон:
                <MyInput
                  className={`${classes.registration__inputText} ${themeContext.darkTheme ? classes.registration__inputTextDark : ''}`}
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                    {
                      ...inputes,
                      phone: e.target.value,
                    },
                  )}
                />
              </label>
              <input className={`${classes.registration__inputButton} ${themeContext.darkTheme ? classes.registration__inputButtonDark : ''}`} 
            type="submit" 
            value="Сохранить" />        
            </form>}
          </div>
        </div>
      </div>
    </>}
    {(()=>{
      registrationId && auth(registrationId)
      return isAuth && <Navigate to={`/user/${authorizationId}`}/>
    })()}
    </>
  );
};

export default connect((state: State) => ({
  registrationId: state.registration.registrationUser.id,
  authorizationId: state.authorization.authUser.id,
  isAuth: state.authorization.isAuth,
  loading: state.registration.loading,
  error: state.registration.error,
}), (dispatch) => bindActionCreators({ registration, auth }, dispatch))(Registration);

