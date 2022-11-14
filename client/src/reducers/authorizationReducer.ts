/*eslint-disable */
import produce from 'immer';
import {
  HIDE_AUTHORIZATION_LOADING, LOAD_AUTHORIZATION_CANCEL, LOAD_AUTHORIZATION_ERROR, LOAD_AUTHORIZATION_SUCCESS, SHOW_AUTHORIZATION_LOADING,
} from '../constants/actions/authorization';
import { AuthorizationAction } from '../types/actions';
import { UserProfileTypeResponse } from '../types/dummyAPIResponses';
import { AuthorizationState } from '../types/state';

const initialState: AuthorizationState = {
    authUser: (localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser') || '') : {}) as UserProfileTypeResponse,
    isAuth: !!localStorage.getItem('authUser'),
    loading: false,
    error: '',
  };
  
  const showLoading = (draft: AuthorizationState) => {
    draft.loading = true;
    return draft;
  };
  
  const hideLoading = (draft: AuthorizationState) => {
    draft.loading = false;
    return draft;
  };
  
  const authSuccess = (draft: AuthorizationState, resp?: UserProfileTypeResponse) => {
    localStorage.setItem('authUser', JSON.stringify(resp));
    resp && (draft.authUser = resp);
    resp && (draft.isAuth = true);
    return draft;
  };
  
  const loadError = (draft: AuthorizationState, e: any) => {
    draft.error = e;
    return draft;
  };
  
  const authCancel = (draft: AuthorizationState) => {
    localStorage.removeItem('authUser');
    draft.authUser = {};
    draft.isAuth = false;
    return draft;
  };

  export const authorizationReducer = (state = initialState, action: AuthorizationAction) => produce(state, (draft: any) => {
    switch (action.type) {
      case SHOW_AUTHORIZATION_LOADING: return showLoading(draft);
      case HIDE_AUTHORIZATION_LOADING: return hideLoading(draft);
      case LOAD_AUTHORIZATION_SUCCESS: return authSuccess(draft, action.authUser);
      case LOAD_AUTHORIZATION_ERROR: return loadError(draft, action.error);
      case LOAD_AUTHORIZATION_CANCEL: return authCancel(draft);
      default: return state;
    }
  });
