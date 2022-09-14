import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import { OwnerType } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import { Loader } from '../Loader/Loader';
import { UserCard } from '../UserCard/UserCard';
import { ComponentWithHelper } from '../wrappers/ComponentWithHelper/ComponentWithHelper';
import * as actions from '../../actions/users';
import classes from './UserList.module.scss';

interface Props {
  userList: Array<OwnerType>,
  loading: boolean,
  error: any,
  load: (page: number, limit: number) => void,
  page: number,
  limit: number,
  total: number,
  setCurrentPage: (page: number) => void,
  setLimit: (limit: number) => void,
}

const UserList = ({
  userList, loading, error, load, page, limit, total, setCurrentPage, setLimit,
}: Props) => {
  // const [loading, setLoading] = useState(true);
  // const [userList, setUserList] = useState([] as Array<PostType>);

  // const loadPosts = (page: number, limit: number) => {
  //   getPostsList(page, limit, (resp: Array<PostType>) => { setUserList(resp); });
  // };

  const changePage = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    pageSize && console.log(pageSize);
  };

  const changePageSize = (page: number, pageSize: number) => {
    setLimit(pageSize);
    page && console.log(page);
  };

  useEffect(() => {
    load(page - 1, limit);
  }, [page, limit]);
  console.log(userList);
  return (
    <div className={classes.paginationWrapper}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {error ? <div>{error}</div> : loading ? <Loader />
        : (
          <div className={classes.userList}>
            {userList.map((user) => (
              <ComponentWithHelper comment={user.id ? user.id : 'empty str'} key={user.id}>
                <UserCard
                  id={user.id}
                  title={user.title}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  picture={user.picture}
                />
              </ComponentWithHelper>
            ))}
          </div>
        )}
      {!loading && (
      <div className={classes.paginationWrapper__pagination}>
        <Pagination defaultCurrent={1} current={page} total={total} pageSize={limit} onChange={changePage} onShowSizeChange={changePageSize} pageSizeOptions={[12, 18, 24, 30]} />
      </div>
      )}
    </div>

  );
};

export default connect((state: State) => ({
  userList: state.users.userList,
  loading: state.users.loading,
  error: state.users.error,
  page: state.users.page || 0,
  limit: state.users.limit || 0,
  total: state.users.total || 0,
}), (dispatch) => bindActionCreators(actions, dispatch))(UserList);
