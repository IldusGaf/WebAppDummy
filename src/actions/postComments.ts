/*eslint-disable*/
import { Dispatch } from "redux";
import { getPostCommentList } from "../api/dummyAPI"
import { HIDE_POSTCOMMENTS_LOADING, LOAD_POSTCOMMENTS_ERROR, LOAD_POSTCOMMENTS_SUCCESS, SET_POSTCOMMENTS_CURRENT_PAGE, SET_POSTCOMMENTS_LIMIT, SET_POSTCOMMENTS_TOTAL_COUNT, SHOW_POSTCOMMENTS_LOADING } from "../constants/actions/postsComments"
import { PostCommentListAction } from "../types/actions";
import { PostCommentType } from "../types/dummyAPIResponses";


const showLoadingAction = () => ({
    type: SHOW_POSTCOMMENTS_LOADING
});

const hideLoadingAction = () => ({
    type: HIDE_POSTCOMMENTS_LOADING
})

const loadSuccessAction = (postComments: Array<PostCommentType>): PostCommentListAction => ({
    type: LOAD_POSTCOMMENTS_SUCCESS,
    postCommentList: postComments
});

const loadErrorAction = (error: any): PostCommentListAction => ({
    type: LOAD_POSTCOMMENTS_ERROR,
    error: error
})

export const setCurrentPage = (page: number): PostCommentListAction => ({
    type: SET_POSTCOMMENTS_CURRENT_PAGE,
    page: page
});

export const setLimit = (limit: number): PostCommentListAction => ({
    type: SET_POSTCOMMENTS_LIMIT,
    limit: limit
});

export const setTotalCount = (total: number): PostCommentListAction => ({
    type: SET_POSTCOMMENTS_TOTAL_COUNT,
    total: total
});

export const loadComments = (idPost: string, page: number, limit: number) => (dispath: Dispatch)=>{
    dispath(showLoadingAction());
    getPostCommentList(idPost, page, limit)
    .then((resp) => {
        dispath(loadSuccessAction(resp ? resp.data : []))
        dispath(setTotalCount(resp ? resp.total : 72))
    })
    .catch((e: any)=> dispath(loadErrorAction(e)))
    .finally(()=> dispath(hideLoadingAction()));

}