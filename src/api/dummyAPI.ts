import { METHOD_GET } from '../constants/common';
import {
  APP_ID_FIELD, APP_ID_VALUE, BASE_URL, LIMIT_FIELD, PAGE_FIELD, POST_URL, USER_URL,
} from '../constants/dummyAPI';
import { OwnerType, PostType, UserProfileTypeResponse } from '../types/dummyAPIResponses';

const doGetRequest = (path:string, searchParams?: Record<string, any>, callback?: (resp: any) => void, errorCallback?: (resp: any)=> void) => {
  const url = new URL(path, BASE_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url, {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),

  }).then((response) => response.json())
    .then((json: any) => (callback ? callback(json.data) : json))
    .catch(errorCallback);
};

export const getPostList = (page: number, limit: number, callback?: (resp: Array<PostType>) => any, errorCallback?: (resp: any)=> void) => doGetRequest(POST_URL, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
},
callback, errorCallback);

export const getUserList = (page: number, limit: number, callback?: (resp: Array<OwnerType>) => any, errorCallback?: (resp: any)=> void) => doGetRequest(USER_URL, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
},
callback, errorCallback);

export const getPostCommentList = (idPost: string, page: number, limit: number, callback?: (resp: Array<OwnerType>) => any, errorCallback?: (resp: any)=> void) => doGetRequest(`${POST_URL}/${idPost}/comment`, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
},
callback, errorCallback);

export const getUserProfile = (idUser: string, callback?: (resp: UserProfileTypeResponse) => any, errorCallback?: (resp: any)=> void) => doGetRequest(`${USER_URL}/${idUser}`, {},
  callback, errorCallback);

export const getPostListByUser = (page: number, limit: number, idUser: string, callback?: (resp: Array<PostType>) => any, errorCallback?: (resp: any)=> void) => doGetRequest(`${USER_URL}/${idUser}/post`, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
},
callback, errorCallback);
