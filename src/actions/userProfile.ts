import { Dispatch } from 'redux';
import { getUserProfile } from '../api/dummyAPI';
import {
  HIDE_USER_PROFILE_LOADING, LOAD_USER_PROFILE_ERROR, LOAD_USER_PROFILE_SUCCESS, SHOW_USER_PROFILE_LOADING,
} from '../constants/actions/userProfile';
import { UserProfileAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';

const showLoadingAction = () => ({
  type: SHOW_USER_PROFILE_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USER_PROFILE_LOADING,
});

const loadSuccessAction = (userData: UserProfileTypeResponse): UserProfileAction => ({
  type: LOAD_USER_PROFILE_SUCCESS,
  userProfileData: userData,
});

const loadErrorAction = (error: any): UserProfileAction => ({
  type: LOAD_USER_PROFILE_ERROR,
  error,
});

export const load = (idUser: string) => (dispath: Dispatch) => {
  dispath(showLoadingAction());
  getUserProfile(idUser)
    .then((resp: UserProfileTypeResponse) => {
      dispath(loadSuccessAction(resp || {}));
    })
    .catch((e: any) => dispath(loadErrorAction(e)))
    .finally(() => dispath(hideLoadingAction()));
};
