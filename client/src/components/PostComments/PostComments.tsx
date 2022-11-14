import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../types/state';
import * as actions from '../../actions/postComments';
import { PostCommentType } from '../../types/dummyAPIResponses';
import { Comment } from '../Comment/Comment';
import { Loader } from '../Loader/Loader';
import classes from './PostComments.module.scss';
import { PaginationWrapper } from '../wrappers/PaginationWrapper/PaginationWrapper';

interface Props {
  post: string,
  postCommentList: Array<PostCommentType>,
  loading: boolean,
  error: any,
  loadComments: (idPost: string, page: number, limit: number) => void,
  page: number,
  limit: number,
  total: number,
  setCurrentPage: (page: number) => void,
  setLimit: (limit: number) => void,
}

const PostComments = ({
  post, postCommentList, loading, error, loadComments, page, limit, total, setCurrentPage, setLimit,
} :Props) => {
  useEffect(() => {
    loadComments(post, page - 1, limit);
  }, [post, page, limit]);

  return (
    <PaginationWrapper loading={loading} page={page} total={total} limit={limit} setCurrentPage={setCurrentPage} setLimit={setLimit}>
      {error ? <div>{error}</div> : loading ? <Loader /> : (
        <div className={classes.postComments}>
          {postCommentList.map((comment) => (
            <Comment key={comment.id} message={comment.message} owner={comment.owner} publishDate={comment.publishDate} />
          ))}
        </div>
      )}
    </PaginationWrapper>
  );
};

export default connect((state: State) => ({
  postCommentList: state.postComments.postCommentList,
  loading: state.postComments.loading,
  error: state.postComments.error,
  page: state.postComments.page || 0,
  limit: state.postComments.limit || 0,
  total: state.postComments.total || 0,
}), (dispatch) => bindActionCreators(actions, dispatch))(PostComments);
