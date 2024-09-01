import { Routes, Route } from 'react-router-dom';
import { Pagination } from '@app/pages/Pagination';
import { Layout } from '@app/components/Layout';
import { AdvancedPagination } from '@app/pages/AdvancedPagination';
import { InfiniteScroll } from '@app/pages/InfiniteScroll';
import { InfiniteScrollWithAPI } from '@app/pages/InfiniteScrollWithAPI';
import { InfiniteScrollWithData } from '@app/pages/InfiniteScrollWithData';
import { FullPageLoader } from '@app/components/FullPageLoader';
import { ROUTES } from '@app/constants';

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
