import { cx, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";

import { Page } from "./page";
import { usePagination } from "./use-pagination";

interface IPaginationProps extends DefaultProps {
  pageCount?: number;
  currentPage?: number;
  defaultCurrentPage?: number;
  onPageChange?: (e: React.ChangeEvent<unknown>, page: number) => void;
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
      currentPage,
      defaultCurrentPage,
      pageCount = 0,
      onPageChange = noop,
      showPages = true,
      ...rest
    },
    ref
  ) => {
    const { items } = usePagination({
      count: pageCount,
      defaultPage: defaultCurrentPage,
      page: currentPage,
      onChange: onPageChange,
    });

    const elements = items.map(({ page, type, selected, ...item }, idx) => {
      if (type === "start-ellipsis" || type === "end-ellipsis") {
        return (
          <span key={idx} className="page-ellipsis">
            ...
          </span>
        );
      } else if (type === "page") {
        return (
          <Page key={idx} {...item} page={page} selected={selected}>
            {page}
          </Page>
        );
      } else if (type === "previous") {
        return (
          <button key={idx} {...item} className="page-previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="mr-1 fill-current"
            >
              <path
                fillRule="evenodd"
                d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L6.06 8l3.72 3.72a.75.75 0 010 1.06z"
              ></path>
            </svg>
            Previous
          </button>
        );
      } else if (type === "next") {
        return (
          <button key={idx} {...item} className="page-next">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="ml-1 fill-current"
            >
              <path
                fillRule="evenodd"
                d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        );
      }
      return null;
    });

    return (
      <nav className={cx("my-4 text-center", className)} ref={ref}>
        <div className="pagination">{elements}</div>
      </nav>
    );
  }
);

if (__DEV__) {
  Pagination.displayName = "Pagination";
}
