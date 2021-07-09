import { Pagination } from "../src";

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Pagination pageCount={15} defaultCurrentPage={2} />
  </div>
);
