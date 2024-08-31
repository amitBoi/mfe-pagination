import { Routes, Route } from 'react-router-dom';
import { Pagination } from '@pages/Pagination';
import { Layout } from '@components/Layout';
import { AdvancedPagination } from '@pages/AdvancedPagination';
import { InfiniteScroll } from '@pages/InfiniteScroll';
import { InfiniteScrollWithAPI } from '@pages/InfiniteScrollWithAPI';
import { InfiniteScrollWithData } from '@pages/InfiniteScrollWithData';
import { FullPageLoader } from '@components/FullPageLoader';
import { ROUTES } from '@constants';

export const Routing = ({ defaultRoute, data }) => (
  <Routes>
    <Route path="/" exact element={<Layout defaultRoute={defaultRoute} />}>
      <Route index element={<FullPageLoader />} />
      <Route path={ROUTES.pagination} Component={Pagination} />
      <Route path={ROUTES.advancedPagination} Component={AdvancedPagination} />
      <Route path={ROUTES.infiniteScroll} Component={InfiniteScroll} />
      <Route path={ROUTES.infiniteScrollWithAPI} Component={InfiniteScrollWithAPI} />
      <Route path={ROUTES.infiniteScrollWithData} element={<InfiniteScrollWithData {...data} />} />
    </Route>
  </Routes>
);
