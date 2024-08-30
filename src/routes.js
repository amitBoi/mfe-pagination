import { Routes, Route } from 'react-router-dom';
import { Pagination } from '@pages/Pagination';
import { AdvancedPagination } from '@pages/AdvancedPagination';
import { InfiniteScroll } from '@pages/InfiniteScroll';
import { InfiniteScrollWithAPI } from '@pages/InfiniteScrollWithAPI';
import { ROUTES } from '@constants';

export const Routing = () => (
  <Routes>
    <Route path={ROUTES.pagination} Component={Pagination} />
    <Route path={ROUTES.advancedPagination} Component={AdvancedPagination} />
    <Route path={ROUTES.infiniteScroll} Component={InfiniteScroll} />
    <Route path={ROUTES.infiniteScrollWithAPI} Component={InfiniteScrollWithAPI} />
  </Routes>
);
