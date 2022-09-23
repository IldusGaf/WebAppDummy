import {
  OwnerType, PostCommentType, PostType, UserProfileTypeResponse,
} from './dummyAPIResponses';

export interface PaginationState {
  page?: number,
  limit?: number,
  total?: number
}

export interface LoadingState {
  loading: boolean,
  error?: string,
}

export interface PostState extends PaginationState, LoadingState {
  postList: Array<PostType>,
}

export interface PostCommentState extends PaginationState, LoadingState {
  postCommentList: Array<PostCommentType>,
}

export interface UserState extends PaginationState, LoadingState {
  userList: Array<OwnerType>,
}

export interface UserProfileState extends LoadingState {
  userProfileData: UserProfileTypeResponse,
}

export interface State {
  posts: PostState,
  postComments: PostCommentState,
  users: UserState,
  userProfile: UserProfileState,
}
