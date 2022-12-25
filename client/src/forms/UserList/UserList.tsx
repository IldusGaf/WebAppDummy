import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import { OwnerType } from '../../types/dummyAPIResponses';
import { State } from '../../types/state';
import { Loader } from '../../components/Loader/Loader';
import { UserCard } from '../../components/UserCard/UserCard';
import { ComponentWithHelper } from '../../components/wrappers/ComponentWithHelper/ComponentWithHelper';
import * as actions from '../../actions/users';
import classes from './UserList.module.scss';
import { PaginationWrapper } from '../../components/wrappers/PaginationWrapper/PaginationWrapper';

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
  useEffect(() => {
    load(page - 1, limit);
  }, [page, limit]);
  return (
    <PaginationWrapper loading={loading} page={page} total={total} limit={limit} setCurrentPage={setCurrentPage} setLimit={setLimit}>
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
    </PaginationWrapper>

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
