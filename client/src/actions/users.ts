import { Dispatch } from 'redux';
import { getUserList } from '../api/dummyAPI';
import {
  HIDE_USERS_LOADING, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS, SET_USERS_CURRENT_PAGE, SET_USERS_LIMIT, SET_USERS_TOTAL_COUNT, SHOW_USERS_LOADING,
} from '../constants/actions/users';
import { UserListAction } from '../types/actions';
import { OwnerType, UserListResponse } from '../types/dummyAPIResponses';

let firstLoad = true;

const showLoadingAction = () => ({
  type: SHOW_USERS_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USERS_LOADING,
});

const loadSuccessAction = (users: Array<OwnerType>): UserListAction => ({
  type: LOAD_USERS_SUCCESS,
  userList: users,
});

const loadErrorAction = (error: any): UserListAction => ({
  type: LOAD_USERS_ERROR,
  error,
});

export const setCurrentPage = (page: number): UserListAction => ({
  type: SET_USERS_CURRENT_PAGE,
  page,
});

export const setLimit = (limit: number): UserListAction => ({
  type: SET_USERS_LIMIT,
  limit,
});

export const setTotalCount = (total: number): UserListAction => ({
  type: SET_USERS_TOTAL_COUNT,
  total,
});

export const load = (page: number, limit: number) => (dispath: Dispatch) => {
  dispath(showLoadingAction());
  getUserList(page, limit)
    .then((resp: UserListResponse) => {
      dispath(loadSuccessAction(resp ? resp.data : []));
      firstLoad && dispath(setTotalCount(resp ? resp.total : 72));
      firstLoad = false;
    })
    .catch((e: any) => dispath(loadErrorAction(e)))
    .finally(() => dispath(hideLoadingAction()));
};
