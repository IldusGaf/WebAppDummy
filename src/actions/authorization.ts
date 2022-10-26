import { Dispatch } from 'redux';
import { getUserProfile } from '../api/dummyAPI';
import {
  HIDE_AUTHORIZATION_LOADING, LOAD_AUTHORIZATION_CANCEL, LOAD_AUTHORIZATION_ERROR, LOAD_AUTHORIZATION_SUCCESS, SHOW_AUTHORIZATION_LOADING,
} from '../constants/actions/authorization';
import { AuthorizationAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';

const showLoadingAction = () => ({
  type: SHOW_AUTHORIZATION_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_AUTHORIZATION_LOADING,
});

const authSuccessAction = (userData: UserProfileTypeResponse): AuthorizationAction => ({
  type: LOAD_AUTHORIZATION_SUCCESS,
  authUser: userData,
});

export const authErrorAction = (error: any): AuthorizationAction => ({
  type: LOAD_AUTHORIZATION_ERROR,
  error,
});

export const authCancelAction = () => ({
  type: LOAD_AUTHORIZATION_CANCEL,
});

export const auth = (idUser: string) => (dispath: Dispatch) => {
  dispath(showLoadingAction());
  getUserProfile(idUser)
    .then((resp: UserProfileTypeResponse) => {
      dispath(authSuccessAction(resp || {}));
    })
    .catch((e: any) => {
      console.log(e);
      dispath(authErrorAction(e));
    })
    .finally(() => dispath(hideLoadingAction()));
};
