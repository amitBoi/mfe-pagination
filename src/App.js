import { AdvancedPagination } from "./components/AdvancedPagination";
import { InfiniteScroll } from "./components/InfiniteScroll";
import { Pagination } from "./components/Pagination";

export const App = () => {
  return (
    <>
      <Pagination />
      <AdvancedPagination />
      <InfiniteScroll />
    </>
  );
};
