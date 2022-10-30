import produce from 'immer';
import {
  HIDE_REGISTRATION_LOADING, REGISTRATION_ERROR, REGISTRATION_SUCCESS, SHOW_REGISTRATION_LOADING,
} from '../constants/actions/registration';
import { RegistrationAction, UserProfileEditAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';
import { RegistrationState } from '../types/state';

const initialState: RegistrationState = {
  registrationUser: { } as UserProfileTypeResponse,
  loading: false,
  error: '',
};

const showLoading = (draft: RegistrationState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: RegistrationState) => {
  draft.loading = false;
  return draft;
};

const registrationSuccess = (draft: RegistrationState, resp?: UserProfileTypeResponse) => {
  resp && (draft.registrationUser = resp);
  return draft;
};

const registrationError = (draft: RegistrationState, e: any) => {
  draft.error = e;
  return draft;
};

export const registrationReducer = (state = initialState, action: RegistrationAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_REGISTRATION_LOADING: return showLoading(draft);
    case HIDE_REGISTRATION_LOADING: return hideLoading(draft);
    case REGISTRATION_SUCCESS: return registrationSuccess(draft, action.regUser);
    case REGISTRATION_ERROR: return registrationError(draft, action.error);
    default: return state;
  }
});
