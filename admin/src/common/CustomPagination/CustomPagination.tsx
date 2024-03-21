import { Pagination } from 'react-admin';
import React from 'react';

interface CustomPaginationProps {
  page: number;
  perPage: number;
  setPage?: () => void;
  setPerPage?: () => void;
  total: number;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({ page, perPage, total, ...rest }) => {
  const totalPages = Math.ceil(total / perPage) || 1;

  return <Pagination rowsPerPageOptions={[11]} page={page} count={totalPages} {...rest} />;
};
