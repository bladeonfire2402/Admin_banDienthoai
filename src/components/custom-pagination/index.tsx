"use client";

import { useEffect } from "react";
import { CustomPaginationWrapper } from "./styled";

interface PaginationProps {
  totalPosts: number; // tổng số bài viết
  currentPage: number; // trang hiện tại
  filterYear?: string; // năm đang được lọc
  setCurrentPage: Function; // hàm chuyển trang
}

const CustomPagination = ({ totalPosts, setCurrentPage, currentPage, filterYear }: PaginationProps) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / 3); i++) {
    pages.push(i);
  }

  useEffect(() => {
    //set lại trang hiện tại là 1 nếu như người dùng filter theo 1 năm khác
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterYear]);

  return (
    <CustomPaginationWrapper>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </CustomPaginationWrapper>
  );
};
export default CustomPagination;
