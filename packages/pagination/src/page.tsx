import { cx, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";

interface IPageProps extends DefaultProps {
  page: number;
  selected?: boolean;
  children?: React.ReactNode;
}

export interface PageProps
  extends React.HTMLAttributes<HTMLElement>,
    IPageProps {}

export const Page = (props: PageProps) => {
  const { page, selected, className, children, ...rest } = props;

  return (
    <button
      className={cx("page", selected ? "page-selected" : "", className)}
      aria-label={`Page ${page}`}
      {...rest}
    >
      {children}
    </button>
  );
};
