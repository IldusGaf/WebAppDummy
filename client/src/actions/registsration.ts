import { Dispatch } from 'redux';
import { registrationUser } from '../api/dummyAPI';
import {
  HIDE_REGISTRATION_LOADING, REGISTRATION_ERROR, REGISTRATION_SUCCESS, SHOW_REGISTRATION_LOADING,
} from '../constants/actions/registration';
import { RegistrationAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';

const showLoadingAction = () => ({
  type: SHOW_REGISTRATION_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_REGISTRATION_LOADING,
});

const registrationSuccessAction = (userData: UserProfileTypeResponse): RegistrationAction => ({
  type: REGISTRATION_SUCCESS,
  regUser: userData,
});

export const registrationErrorAction = (error: any): RegistrationAction => ({
  type: REGISTRATION_ERROR,
  error,
});

export const registration = (userCreate: UserProfileTypeResponse) => (dispath: Dispatch) => {
  dispath(showLoadingAction());
  registrationUser(userCreate)
    .then((resp: UserProfileTypeResponse) => {
      dispath(registrationSuccessAction(resp || {}));
    })
    .catch((e: any) => {
      console.log(e);
      dispath(registrationErrorAction(e));
    })
    .finally(() => dispath(hideLoadingAction()));
};
