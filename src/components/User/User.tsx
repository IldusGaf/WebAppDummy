import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserProfileTypeResponse } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import * as actions from '../../actions/userProfile';
import classes from './User.module.scss';
import { Loader } from '../Loader/Loader';
import PostList from '../PostList/PostList';

interface Props {
  userProfileData: UserProfileTypeResponse,
  loading: boolean,
  error: any,
  load: (idUser: string) => void,
}

const User = ({
  userProfileData, loading, error, load,
}:Props) => {
  const { id } = useParams();
  const themeContext = useContext(ThemeContext);

  console.log(userProfileData);

  useEffect(() => { id && load(id); }, []);
  return (
    <div className={classes.userWrap}>
      <div className={`${classes.user} ${themeContext.darkTheme ? classes.userDark : ''}`}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {error ? <div>{error}</div> : loading ? <Loader />
          : (
            <>
              <figure className={classes.user__image}><img alt={userProfileData.firstName} src={userProfileData.picture} /></figure>
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
                      {userProfileData.dateOfBirth}
                    </span>
                    <span>
                      <b>
                        Дата регистрации:
                      </b>
                      {' '}
                      {userProfileData.registerDate}
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
                <span className={classes.user__infoEdit}>Редактировать</span>
              </div>
            </>
          )}
      </div>
      <PostList idUser={id} />
    </div>
  );
};

export default connect((state: State) => ({
  userProfileData: state.userProfile.userProfileData,
  loading: state.userProfile.loading,
  error: state.userProfile.error,
}), (dispatch) => bindActionCreators(actions, dispatch))(User);
