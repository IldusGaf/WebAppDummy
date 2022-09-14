import { OwnerType, PostCommentType, PostType } from './dummyAPIResponses';

export interface PaginationState {
  page?: number,
  limit?: number,
  total?: number
}

export interface PostState extends PaginationState {
  postList: Array<PostType>,
  loading: boolean,
  error?: string,
}

export interface PostCommentState extends PaginationState {
  postCommentList: Array<PostCommentType>,
  loading: boolean,
  error?: string,
}

export interface UserState extends PaginationState {
  userList: Array<OwnerType>,
  loading: boolean,
  error?: string,
}

export interface State {
  posts: PostState,
  postComments: PostCommentState,
  users: UserState,
}
