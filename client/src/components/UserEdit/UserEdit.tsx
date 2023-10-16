/*eslint-disable */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserProfileTypeResponse } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import { MyInput } from '../UI/MyInput/MyInput';
import { edit, editPhoto } from '../../actions/userProfileEdit';
import classes from './UserEdit.module.scss';

import { format } from 'date-fns';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

interface Props {
  userProfileData: UserProfileTypeResponse,
  setOpen: (value: boolean)=>void,
  edit: (idUser: string, userData: UserProfileTypeResponse) => void,
  editPhoto: (userPhoto: any, callback:(imgUrl: string) => void) => void,
  loading?: boolean,
  error?: any,
}

const UserEdit = ({
  userProfileData, setOpen, loading, error, edit, editPhoto
}:Props) => {
  const fileRef = useRef(null) as any;
  const themeContext = useContext(ThemeContext);
  const [inputes, setInputes] = useState({
      id: userProfileData.id,
      title: userProfileData.title,
      firstName: userProfileData.firstName,
      lastName: userProfileData.lastName,
      picture: userProfileData.picture,
      gender: userProfileData.gender,
      email: userProfileData.email,
      dateOfBirth: userProfileData.dateOfBirth,
      registerDate: userProfileData.registerDate,
      phone: userProfileData.phone,
    });

  useEffect(()=>{
    setInputes({
      id: userProfileData.id,
      title: userProfileData.title,
      firstName: userProfileData.firstName,
      lastName: userProfileData.lastName,
      picture: userProfileData.picture,
      gender: userProfileData.gender,
      email: userProfileData.email,
      dateOfBirth: userProfileData.dateOfBirth,
      registerDate: userProfileData.registerDate,
      phone: userProfileData.phone,
    })
  },[userProfileData])

  const imgHandler = (e: any) => {
    e.preventDefault();
    editPhoto(e.target.files[0], (imgUrl)=>setInputes({...inputes, picture: imgUrl}))
}

  const editHandler = (userData: UserProfileTypeResponse) => {
    edit(userData.id ? userData.id : "", userData)
  }

  return (
    <div className={`${classes.userEdit} ${themeContext.darkTheme ? classes.userEditDark : ''}`}>
      <figure className={classes.userEdit__image}>{ userProfileData.picture ? <img alt={userProfileData.firstName} src={userProfileData.picture} />: <Avatar icon={<UserOutlined />} size={96} />}</figure>
      <div className={classes.userEdit__info}>
        {inputes && <form onSubmit={(e)=>{
          e.preventDefault();
          editHandler(inputes)
          setOpen(false)
        }}>
          <div className={classes.userEdit__imageEdit}>
            <div>
            <label 
              onClick={()=>{
                fileRef.current.click()
                }}
                >
              Обновить фото
              <input ref={fileRef} onChange ={imgHandler} name={'image'} hidden type='file'/>
              </label>
            </div>
            <div>
            <span onClick={()=>{
                setInputes({...inputes, picture: ""})
              }}>
                Удалить фото
            </span>
            </div>
          </div>
        <table>
          <thead />
          <tbody>
          <tr>
            <td>
              <b>
              <label htmlFor='full_name'>
                ФИО:
              </label>
              </b>
            </td>
            <td>
            <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='full_name' type="text" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                      {
                        ...inputes, 
                        title: e.target.value.split(" ")[0],
                        firstName: e.target.value.split(" ")[1],
                        lastName: e.target.value.split(" ")[2],
                      }
                      )} 
                    value={`${inputes.title ? inputes.title : ''} ${inputes.firstName} ${inputes.lastName}`} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='gender'>
                <b>
                  Пол:
                </b>
              </label>
            </td>
            <td>
            <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='gender' type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                {
                  ...inputes, 
                  gender: e.target.value,
                }
                )}
                defaultValue={inputes.gender} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='dateOfBirth'>
                <b>
                  Дата рождения:
                </b>
              </label>
            </td>
            <td>
            <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='dateOfBirth' type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                {
                  ...inputes, 
                  dateOfBirth: e.target.value,
                }
                )}
              defaultValue={inputes.dateOfBirth && format(new Date(inputes.dateOfBirth), 'dd MMMM yyyy')} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='registerDate'>
                <b>
                  Дата регистрации:
                </b>
              </label>
            </td>
            <td>
            <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='registerDate' type="text" 
              defaultValue={inputes.registerDate && format(new Date(inputes.registerDate), 'MMMM dd, yyyy')} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='email'>
                <b>
                  Email:
                </b>
              </label>
            </td>
            <td>
              <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='email' type="text" 
              defaultValue={inputes.email} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='phone'>
              <b>
                Телефон:
              </b>
              </label>
            </td>
            <td>
            <MyInput className={`${classes.userEdit__inputText} ${themeContext.darkTheme ? classes.userEdit__inputTextDark : ''}`} id='phone' type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputes(
                {
                  ...inputes, 
                  phone: e.target.value,
                }
                )}
                defaultValue={inputes.phone} />
            </td>
          </tr>
          </tbody>
        </table>
        <div>
          <input className={`${classes.userEdit__inputButton} ${themeContext.darkTheme ? classes.userEdit__inputButtonDark : ''}`} 
          type="submit" 
          value="Сохранить" />
        </div>
        </form>
        }
      </div>
    </div>
  );
};

export default connect((state: State) => ({
  loading: state.userProfileEdit.loading,
  error: state.userProfileEdit.error,
}), (dispatch) => bindActionCreators({edit, editPhoto}, dispatch))(UserEdit);