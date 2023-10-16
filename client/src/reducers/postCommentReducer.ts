/*eslint-disable */
import produce from 'immer';
import {
  HIDE_POSTCOMMENTS_LOADING, LOAD_POSTCOMMENTS_ERROR, LOAD_POSTCOMMENTS_SUCCESS, SET_POSTCOMMENTS_CURRENT_PAGE, SET_POSTCOMMENTS_LIMIT, SET_POSTCOMMENTS_TOTAL_COUNT, SHOW_POSTCOMMENTS_LOADING,
} from '../constants/actions/postsComments';
import { PostCommentListAction } from '../types/actions';
import { PostCommentType } from '../types/dummyAPIResponses';
import { PostCommentState } from '../types/state';

const initialState: PostCommentState = {
  postCommentList: [] as Array<PostCommentType>,
  loading: false,
  error: '',
  page: 0,
  limit: 6,
  total: 0,
};

const showLoading = (draft: PostCommentState) => {
  draft.loading = true;
  return draft;
};

const hideLoading = (draft: PostCommentState) => {
  draft.loading = false;
  return draft;
};

const loadSuccess = (draft: PostCommentState, resp?: Array<PostCommentType>) => {
  resp && (draft.postCommentList = resp);
  return draft;
};

const loadError = (draft: PostCommentState, e: any) => {
  draft.error = e;
  return draft;
};

const setCurrentPage = (draft: PostCommentState, page?: number) => {
  page && (draft.page = page);
  return draft;
};

const setTotalCount = (draft: PostCommentState, total?: number) => {
  total && (draft.total = total);
  return draft;
};

const setLimit = (draft: PostCommentState, limit?: number) => {
  limit && (draft.limit = limit);
  return draft;
};

export const postCommentReducer = (state = initialState, action: PostCommentListAction) => produce(state, (draft: any) => {
  switch (action.type) {
    case SHOW_POSTCOMMENTS_LOADING: return showLoading(draft);
    case HIDE_POSTCOMMENTS_LOADING: return hideLoading(draft);
    case LOAD_POSTCOMMENTS_SUCCESS: return loadSuccess(draft, action.postCommentList);
    case LOAD_POSTCOMMENTS_ERROR: return loadError(draft, action.error);
    case SET_POSTCOMMENTS_CURRENT_PAGE: return setCurrentPage(draft, action.page);
    case SET_POSTCOMMENTS_TOTAL_COUNT: return setTotalCount(draft, action.total);
    case SET_POSTCOMMENTS_LIMIT: return setLimit(draft, action.limit);
    default: return state;
  }
});
