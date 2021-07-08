import { cx, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";

interface IPageProps extends DefaultProps {
  page: number;
  active?: boolean;
  children?: React.ReactNode;
}

export interface PageProps
  extends React.HTMLAttributes<HTMLElement>,
    IPageProps {}

export const Page = (props: PageProps) => {
  const { page, active, className, children, ...rest } = props;

  return (
    <a
      className={cx(
        "inline-flex items-center min-w-8 justify-center px-2.5 py-1.5 h-8 leading-4 text-sm text-center rounded-md border border-transparent whitespace-nowrap transition-colors duration-150 ease-in-out cursor-base",
        active
          ? "text-gray-900 hover:border-gray-200"
          : "bg-blue-500 text-white",
        className
      )}
      aria-label={`Page ${page}`}
      {...rest}
    >
      {children}
    </a>
  );
};
