/*eslint-disable */
import produce from 'immer';
import {
  HIDE_USERS_LOADING, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS, SET_USERS_CURRENT_PAGE, SET_USERS_LIMIT, SET_USERS_TOTAL_COUNT, SHOW_USERS_LOADING,
} from '../constants/actions/users';
import { UserListAction } from '../types/actions';
import { OwnerType } from '../types/dummyAPIResponses';
import { UserState } from '../types/state';

const initialState: UserState = {
  userList: [] as Array<OwnerType>,
  loading: false,
  error: '',
  page: 0,
  limit: 12,
  total: 36,
};

const showLoading = (draft: UserState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: UserState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: UserState, resp?: Array<OwnerType>) => {
  resp && (draft.userList = resp);
  return draft;
};

const loadError = (draft: UserState, e: any) => {
  draft.error = e;
  return draft;
};

const setCurrentPage = (draft: UserState, page?: number) => {
  page && (draft.page = page);
  return draft;
};

const setTotalCount = (draft: UserState, total?: number) => {
  total && (draft.total = total);
  return draft;
};

const setLimit = (draft: UserState, limit?: number) => {
  limit && (draft.limit = limit);
  return draft;
};

export const userReducer = (state = initialState, action: UserListAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_USERS_LOADING: return showLoading(draft);
    case HIDE_USERS_LOADING: return hideLoading(draft);
    case LOAD_USERS_SUCCESS: return loadSuccess(draft, action.userList);
    case LOAD_USERS_ERROR: return loadError(draft, action.error);
    case SET_USERS_CURRENT_PAGE: return setCurrentPage(draft, action.page);
    case SET_USERS_TOTAL_COUNT: return setTotalCount(draft, action.total);
    case SET_USERS_LIMIT: return setLimit(draft, action.limit);
    default: return state;
  }
});
