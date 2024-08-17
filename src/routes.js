import { Routes, Route } from "react-router-dom";
import { Pagination } from "./components/Pagination";
import { AdvancedPagination } from "./components/AdvancedPagination";
import { InfiniteScroll } from "./components/InfiniteScroll";
import { ROUTES } from "./constants";

export const Routing = () => (
  <Routes>
    <Route path={ROUTES.pagination} Component={Pagination} />
    <Route path={ROUTES.advancedPagination} Component={AdvancedPagination} />
    <Route path={ROUTES.infiniteScroll} Component={InfiniteScroll} />
  </Routes>
);
