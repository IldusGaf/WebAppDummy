import produce from 'immer';
import {
  HIDE_USER_PROFILE_LOADING, LOAD_USER_PROFILE_ERROR, LOAD_USER_PROFILE_SUCCESS, SHOW_USER_PROFILE_LOADING,
} from '../constants/actions/userProfile';
import { UserProfileAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';
import { UserProfileState } from '../types/state';

const initialState: UserProfileState = {
  userProfileData: { } as UserProfileTypeResponse,
  loading: false,
  error: '',
};

const showLoading = (draft: UserProfileState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: UserProfileState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: UserProfileState, resp?: UserProfileTypeResponse) => {
  console.log(resp);
  resp && (draft.userProfileData = resp);
  return draft;
};

const loadError = (draft: UserProfileState, e: any) => {
  draft.error = e;
  return draft;
};

export const userProfileReducer = (state = initialState, action: UserProfileAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_USER_PROFILE_LOADING: return showLoading(draft);
    case HIDE_USER_PROFILE_LOADING: return hideLoading(draft);
    case LOAD_USER_PROFILE_SUCCESS: return loadSuccess(draft, action.userProfileData);
    case LOAD_USER_PROFILE_ERROR: return loadError(draft, action.error);
    default: return state;
  }
});
