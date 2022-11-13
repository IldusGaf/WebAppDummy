import {
  OwnerType, PostCommentType, PostType, UserProfileTypeResponse,
} from './dummyAPIResponses';
import { PaginationState } from './state';

export interface Action {
  type: string
}

export interface LoadingState {
  loading?: boolean,
  error?: string,
}

export interface PostListAction extends Action, PaginationState, LoadingState {
  postList?: Array<PostType>,
}

export interface PostCommentListAction extends Action, PaginationState, LoadingState {
  postCommentList?: Array<PostCommentType>,
}

export interface UserListAction extends Action, PaginationState, LoadingState {
  userList?: Array<OwnerType>,
}

export interface UserProfileAction extends Action, LoadingState {
  userProfileData?: UserProfileTypeResponse,
}

export interface UserProfileEditAction extends Action, LoadingState {
  userProfileEditData?: UserProfileTypeResponse,
}

export interface AuthorizationAction extends Action, LoadingState {
  authUser?: UserProfileTypeResponse,
}

export interface RegistrationAction extends Action, LoadingState {
  regUser?: UserProfileTypeResponse,
}
