import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { Avatar } from 'antd';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserProfileTypeResponse } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import * as actions from '../../actions/userProfile';
import classes from './User.module.scss';
import { Loader } from '../../components/Loader/Loader';
import PostList from '../PostList/PostList';
import { Modal } from '../../components/Modal/Modal';
import UserEdit from '../../components/UserEdit/UserEdit';

interface Props {
  userProfileData: UserProfileTypeResponse,
  userProfileEditData: UserProfileTypeResponse,
  loading: boolean,
  error: any,
  load: (idUser: string) => void,
  isAuth: boolean,
}

const User = ({
  userProfileData, userProfileEditData, loading, error, load, isAuth,
}:Props) => {
  const { id } = useParams();
  const themeContext = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const initialModalContent = {
  };
  const [modalContent, setModalContent] = useState(initialModalContent);

  useEffect(() => { id && load(id); }, [id]);
  useEffect(() => { id && load(id); }, [userProfileEditData]);
  return (
    <div className={classes.userWrap}>
      {error ? <div>{error}</div> : loading ? <Loader />
        : (
          <div className={`${classes.user} ${themeContext.darkTheme ? classes.userDark : ''}`}>
            {/* eslint-disable-next-line no-nested-ternary */}

            <>
              <figure className={classes.user__image}>{ userProfileData.picture ? <img alt={userProfileData.firstName} src={userProfileData.picture} /> : <Avatar icon={<UserOutlined />} size={96} />}</figure>
              <div className={classes.user__info}>
                <div className={classes.user__infoMain}>
                  <div>
                    <b>
                      {userProfileData.title}
                      {' '}
                      {userProfileData.firstName}
                      {' '}
                      {userProfileData.lastName}
                    </b>
                    <span>
                      <b>
                        Пол:
                      </b>
                      {' '}
                      {userProfileData.gender}
                    </span>
                    <span>
                      <b>
                        Дата рождения:
                      </b>
                      {' '}
                      {userProfileData.dateOfBirth && format(new Date(userProfileData.dateOfBirth), 'dd MMMM yyyy')}
                    </span>
                    <span>
                      <b>
                        Дата регистрации:
                      </b>
                      {' '}
                      {userProfileData.registerDate && format(new Date(userProfileData.registerDate), 'dd MMMM yyyy')}
                    </span>
                    <span>
                      <b>
                        Email:
                      </b>
                      {' '}
                      {userProfileData.email}
                    </span>
                    <span>
                      <b>
                        Телефон:
                      </b>
                      {' '}
                      {userProfileData.phone}
                    </span>
                  </div>
                  <span>
                    <b>
                      ID:
                    </b>
                    {' '}
                    {id}
                  </span>
                </div>
                {isAuth && (
                  <span
                    className={classes.user__infoEdit}
                    onClick={() => {
                      setOpen(true);
                      setModalContent({});
                    }}
                  >
                    <EditOutlined />
                    Редактировать
                  </span>
                )}
              </div>
            </>

          </div>
        )}
      <PostList idUser={id} />
      <Modal open={open} setOpen={setOpen}>
        <UserEdit userProfileData={userProfileData} setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default connect((state: State) => ({
  userProfileData: state.userProfile.userProfileData,
  userProfileEditData: state.userProfileEdit.userProfileEditData,
  loading: state.userProfile.loading || state.posts.loading,
  error: state.userProfile.error,
  isAuth: state.authorization.isAuth,
}), (dispatch) => bindActionCreators(actions, dispatch))(User);
