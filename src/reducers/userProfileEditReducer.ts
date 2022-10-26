import produce from 'immer';
import {
  HIDE_UPLOAD_IMGBB_LOADING,
  HIDE_USER_PROFILE_EDIT_LOADING, LOAD_UPLOAD_IMGBB_ERROR, LOAD_UPLOAD_IMGBB_SUCCESS, LOAD_USER_PROFILE_EDIT_ERROR, LOAD_USER_PROFILE_EDIT_SUCCESS, SHOW_UPLOAD_IMGBB_LOADING, SHOW_USER_PROFILE_EDIT_LOADING,
} from '../constants/actions/userProfile';
import { UserProfileEditAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';
import { UserProfileEditState } from '../types/state';

const initialState: UserProfileEditState = {
  userProfileEditData: { } as UserProfileTypeResponse,
  loading: false,
  error: '',
};

const showLoading = (draft: UserProfileEditState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: UserProfileEditState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: UserProfileEditState, resp?: UserProfileTypeResponse) => {
  resp && (draft.userProfileEditData = resp);
  return draft;
};

const loadPhotoSuccess = (draft: UserProfileEditState) => draft;

const loadError = (draft: UserProfileEditState, e: any) => {
  draft.error = e;
  return draft;
};

export const userProfileEditReducer = (state = initialState, action: UserProfileEditAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_UPLOAD_IMGBB_LOADING: return showLoading(draft);
    case HIDE_UPLOAD_IMGBB_LOADING: return hideLoading(draft);
    case LOAD_UPLOAD_IMGBB_SUCCESS: return loadPhotoSuccess(draft);
    case LOAD_UPLOAD_IMGBB_ERROR: return loadError(draft, action.error);
    case SHOW_USER_PROFILE_EDIT_LOADING: return showLoading(draft);
    case HIDE_USER_PROFILE_EDIT_LOADING: return hideLoading(draft);
    case LOAD_USER_PROFILE_EDIT_SUCCESS: return loadSuccess(draft, action.userProfileEditData);
    case LOAD_USER_PROFILE_EDIT_ERROR: return loadError(draft, action.error);
    default: return state;
  }
});
