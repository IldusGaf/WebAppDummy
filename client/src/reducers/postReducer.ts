/*eslint-disable */
import produce from 'immer';
import {
  HIDE_POSTS_LOADING, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS, SET_POSTS_CURRENT_PAGE, SET_POSTS_LIMIT, SET_POSTS_TOTAL_COUNT, SHOW_POSTS_LOADING,
} from '../constants/actions/posts';
import { PostListAction } from '../types/actions';
import { PostType } from '../types/dummyAPIResponses';
import { PostState } from '../types/state';

const initialState: PostState = {
  postList: [] as Array<PostType>,
  loading: false,
  error: '',
  page: 0,
  limit: 6,
  total: 0,
};

const showLoading = (draft: PostState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: PostState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: PostState, resp?: Array<PostType>) => {
  resp && (draft.postList = resp);
  return draft;
};

const loadError = (draft: PostState, e: any) => {
  draft.error = e;
  return draft;
};

const setCurrentPage = (draft: PostState, page?: number) => {
  draft.page = page;
  return draft;
};

const setTotalCount = (draft: PostState, total?: number) => {
  draft.total = total;
  return draft;
};

const setLimit = (draft: PostState, limit?: number) => {
  draft.limit = limit;
  return draft;
};

export const postReducer = (state = initialState, action: PostListAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_POSTS_LOADING: return showLoading(draft);
    case HIDE_POSTS_LOADING: return hideLoading(draft);
    case LOAD_POSTS_SUCCESS: return loadSuccess(draft, action.postList);
    case LOAD_POSTS_ERROR: return loadError(draft, action.error);
    case SET_POSTS_CURRENT_PAGE: return setCurrentPage(draft, action.page);
    case SET_POSTS_TOTAL_COUNT: return setTotalCount(draft, action.total);
    case SET_POSTS_LIMIT: return setLimit(draft, action.limit);
    default: return state;
  }
});
