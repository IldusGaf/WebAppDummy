import { METHOD_GET, METHOD_POST, METHOD_PUT } from '../constants/common';
import {
  APP_ID_FIELD, APP_ID_VALUE, PROXY_URL, LIMIT_FIELD, PAGE_FIELD, POST_URL, USER_URL,
} from '../constants/dummyAPI';
import { OwnerType, PostType, UserProfileTypeResponse } from '../types/dummyAPIResponses';

const doGetRequest = (path:string, searchParams?: Record<string, any>, callback?: (resp: any) => void, errorCallback?: (resp: any)=> void) => {
  const url = new URL(path, PROXY_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url, {
    method: METHOD_GET,
    // расскоментивать при обращении не через proxy
    // headers: new Headers({
      //   [APP_ID_FIELD]: APP_ID_VALUE,
    // }),

  }).then((response) => response.json())
    .then((json: any) => {
      if (json.error) {
        return Promise.reject(json.error);
      }
      return (callback ? callback(json.data) : json);
    })
    .catch((err: any) => (errorCallback ? errorCallback(err) : Promise.reject(err)));
};

const doPutRequest = (path:string, data:any, searchParams?: Record<string, any>, callback?: (resp: any) => void, errorCallback?: (resp: any)=> void) => {
  const url = new URL(path, PROXY_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url, {
    method: METHOD_PUT,
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8',
      //   [APP_ID_FIELD]: APP_ID_VALUE,
    }),
    body: JSON.stringify(data),
  }).then((response) => response.json())
    .then((json: any) => (callback ? callback(json.data) : json))
    .catch((err: any) => (errorCallback ? errorCallback(err) : err));
};

const doPostRequest = (path:string, data:any, searchParams?: Record<string, any>, callback?: (resp: any) => void, errorCallback?: (resp: any)=> void) => {
  const url = new URL(path, PROXY_URL);
  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });
  return fetch(url, {
    method: METHOD_POST,
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8',
      //   [APP_ID_FIELD]: APP_ID_VALUE,
    }),
    body: JSON.stringify(data),
  }).then((response) => response.json())
    .then((json: any) => (callback ? callback(json.data) : json))
    .catch((err: any) => (errorCallback ? errorCallback(err) : err));
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

export const getUserProfile = (idUser: string, callback?: (resp: UserProfileTypeResponse) => any, errorCallback?: (resp: any)=> any) => doGetRequest(`${USER_URL}/${idUser}`, {},
  callback, errorCallback);

export const getPostListByUser = (page: number, limit: number, idUser: string, callback?: (resp: Array<PostType>) => any, errorCallback?: (resp: any)=> void) => doGetRequest(`${USER_URL}/${idUser}/post`, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
},
callback, errorCallback);

export const editUserProfile = (idUser: string,
  update: UserProfileTypeResponse,
  callback?: (resp: UserProfileTypeResponse) => any,
  errorCallback?: (resp: any)=> void) => doPutRequest(`${USER_URL}/${idUser}`, update,
  callback, errorCallback);

export const registrationUser = (createUser: UserProfileTypeResponse,
  callback?: (resp: UserProfileTypeResponse) => any,
  errorCallback?: (resp: any)=> void) => doPostRequest(`${USER_URL}/create`, createUser,
  callback, errorCallback);
