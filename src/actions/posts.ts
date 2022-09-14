/*eslint-disable*/
import { Dispatch } from "redux";
import { getPostList } from "../api/dummyAPI"
import { HIDE_POSTS_LOADING, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS, SET_POSTS_CURRENT_PAGE, SET_POSTS_LIMIT, SET_POSTS_TOTAL_COUNT, SHOW_POSTS_LOADING } from "../constants/actions/posts"
import { PostListAction } from "../types/actions";
import { PostType } from "../types/dummyAPIResponses";

let firstLoad = true;
const showLoadingAction = () => ({
    type: SHOW_POSTS_LOADING
});

const hideLoadingAction = () => ({
    type: HIDE_POSTS_LOADING
})

const loadSuccessAction = (posts: Array<PostType>): PostListAction => ({
    type: LOAD_POSTS_SUCCESS,
    postList: posts
});

const loadErrorAction = (error: any): PostListAction => ({
    type: LOAD_POSTS_ERROR,
    error: error
})

export const setCurrentPage = (page: number): PostListAction => ({
    type: SET_POSTS_CURRENT_PAGE,
    page: page
});

export const setLimit = (limit: number): PostListAction => ({
    type: SET_POSTS_LIMIT,
    limit: limit
});

export const setTotalCount = (total: number): PostListAction => ({
    type: SET_POSTS_TOTAL_COUNT,
    total: total
});

export const load = (page: number, limit: number) => (dispath: Dispatch)=>{
    dispath(showLoadingAction());
    getPostList(page, limit)
    .then((resp) => {
        dispath(loadSuccessAction(resp ? resp.data : []))
        firstLoad && dispath(setTotalCount(resp ? resp.total : 72))
        firstLoad = false;
    })
    .catch((e: any)=> dispath(loadErrorAction(e)))
    .finally(()=> dispath(hideLoadingAction()));

}