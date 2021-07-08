import { cx, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";

import { Page } from "./page";

interface IPaginationProps extends DefaultProps {
  pageCount?: number;
  currentPage?: number;
  onPageChange?: (e?: React.MouseEvent, page?: number) => void;
  showPages?: boolean;
}

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    IPaginationProps {}

const noop = () => null;

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      currentPage: _currentPage = 0,
      pageCount = 0,
      onPageChange = noop,
      showPages = true,
      ...rest
    },
    ref
  ) => {
    const [currentPage, setCurrentPage] = useState(_currentPage);

    useEffect(() => {
      setCurrentPage(_currentPage);
    }, [_currentPage]);

    const handlePageClick = useCallback(
      (page: number) => (e: React.MouseEvent) => {
        setCurrentPage(page);
        onPageChange(e, page);
      },
      [onPageChange, setCurrentPage]
    );

    const renderPages = useCallback(() => {
      let listPage = [];

      if (pageCount > 0) {
        let i = 0;
        let endPage;
        if (pageCount <= 9) {
          i = 0;
          endPage = pageCount;
        } else {
          if (currentPage <= 4) {
            i = 0;
            endPage = 9;
          } else if (currentPage + 4 >= pageCount) {
            i = pageCount - 9;
            endPage = pageCount;
          } else {
            i = currentPage - 4;
            endPage = currentPage + 5;
          }
        }

        for (i; i < endPage; i++) {
          const active = i === currentPage;

          listPage.push(
            <Page key={i} page={i} onClick={handlePageClick(i)} active={active}>
              {i + 1}
            </Page>
          );
        }
      }
      return listPage;
    }, [pageCount, handlePageClick]);

    const elements = renderPages();

    return (
      <nav className={cx("my-4 text-center", className)} ref={ref}>
        <div className="inline-flex items-center space-x-1">{elements}</div>
      </nav>
    );
  }
);

if (__DEV__) {
  Pagination.displayName = "Pagination";
}
