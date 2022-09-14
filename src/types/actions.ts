import { OwnerType, PostCommentType, PostType } from './dummyAPIResponses';
import { PaginationState } from './state';

export interface Action {
  type: string
}

export interface PostListAction extends Action, PaginationState {
  postList?: Array<PostType>,
  loading?: boolean,
  error?: string,
}

export interface PostCommentListAction extends Action, PaginationState {
  postCommentList?: Array<PostCommentType>,
  loading?: boolean,
  error?: string,
}

export interface UserListAction extends Action, PaginationState {
  userList?: Array<OwnerType>,
  loading?: boolean,
  error?: string,
}
