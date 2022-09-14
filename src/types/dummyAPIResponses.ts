export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface OwnerType {
  id?: string,
  title?: string,
  firstName?: string;
  lastName?: string;
  picture?: string;
}

export interface PostType {
  text: string,
  image: string,
  owner: OwnerType,
  publishDate: string,
  id?: string,
  likes?: number,
  tags?: Array<any>,
}

export interface PostCommentType {
  message: string,
  owner: OwnerType,
  publishDate: string,
  post?: string,
  id?: string,
}

export interface PostListResponse extends ListResponseType<PostType> {}

export interface PostCommentListResponse extends ListResponseType<PostCommentType> {}

export interface UserListResponse extends ListResponseType<OwnerType> {}
