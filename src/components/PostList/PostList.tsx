import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostType } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import { Loader } from '../Loader/Loader';
import { PostCard } from '../PostCard/PostCard';
import { ComponentWithHelper } from '../wrappers/ComponentWithHelper/ComponentWithHelper';
import * as actions from '../../actions/posts';
import classes from './PostList.module.scss';
import { Modal } from '../Modal/Modal';
import PostComments from '../PostComments/PostComments';
import { PaginationWrapper } from '../wrappers/PaginationWrapper/PaginationWrapper';

interface Props {
  postList: Array<PostType>,
  loading: boolean,
  error: any,
  load: (page: number, limit: number, idUser?: string) => void,
  page: number,
  limit: number,
  total: number,
  setCurrentPage: (page: number) => void,
  setLimit: (limit: number) => void,
  idUser?: string,
}

const PostList = ({
  postList, loading, error, load, page, limit, total, setCurrentPage, setLimit, idUser,
}: Props) => {
  const [open, setOpen] = useState(false);
  const initialModalContent: PostType = {
    text: '',
    image: '',
    owner: {},
    publishDate: '',
    id: '',
  };
  const [modalContent, setModalContent] = useState(initialModalContent);

  useEffect(() => {
    load(page - 1, limit, idUser);
  }, [page, limit, idUser]);

  return (
    <>
      <PaginationWrapper loading={loading} page={page} total={total} limit={limit} setCurrentPage={setCurrentPage} setLimit={setLimit}>
        <div className={classes.postList}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {error ? <div>{error}</div> : loading ? <Loader /> : (idUser ? postList.slice(0, 3) : postList).map((post) => (
            <ComponentWithHelper comment={post.id ? post.id : 'empty str'} key={post.id}>
              <div onClick={() => {
                setOpen(true);
                setModalContent(post);
              }}
              >
                <PostCard image={post.image} text={post.text} owner={post.owner} publishDate={post.publishDate} visibleOwner={!!idUser} />
              </div>
            </ComponentWithHelper>
          ))}
        </div>
      </PaginationWrapper>
      <Modal open={open} setOpen={setOpen}>
        <PostCard image={modalContent.image} text={modalContent.text} owner={modalContent.owner} publishDate={modalContent.publishDate} />
        {modalContent.id && <PostComments post={modalContent.id || ''} />}
      </Modal>
    </>
  );
};

export default connect((state: State) => ({
  postList: state.posts.postList,
  loading: state.posts.loading,
  error: state.posts.error,
  page: state.posts.page || 0,
  limit: state.posts.limit || 0,
  total: state.posts.total || 0,
}), (dispatch) => bindActionCreators(actions, dispatch))(PostList);
