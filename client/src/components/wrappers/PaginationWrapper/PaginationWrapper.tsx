import { Pagination } from 'antd';
import React, { ReactNode } from 'react';
import classes from './PaginationWrapper.module.scss';

interface Props {
  loading: boolean,
  page: number,
  limit: number,
  total: number,
  setCurrentPage: (page: number) => void,
  setLimit: (limit: number) => void,
  children: ReactNode
}

export const PaginationWrapper = ({
  loading, page, limit, total, setCurrentPage, setLimit, children,
}: Props) => {
  const changePage = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    pageSize && console.log(pageSize);
  };

  const changePageSize = (page: number, pageSize: number) => {
    setLimit(pageSize);
    page && console.log(page);
  };
  return (
    <>
      <div className={classes.paginationWrapper}>
        {children}
      </div>
      {!loading && !!total && (
        <div className={classes.paginationWrapper__pagination}>
          {total > limit && <Pagination defaultCurrent={1} current={page} total={total} pageSize={limit} onChange={changePage} onShowSizeChange={changePageSize} pageSizeOptions={[6, 12, 24, 48]} />}
        </div>
      )}
    </>
  );
};
