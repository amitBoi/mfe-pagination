import { Routes, Route } from 'react-router-dom';
import PaginationPage from '@app/pages/Pagination';
import AdvancedPaginationPage from '@app/pages/AdvancedPagination';
import InfiniteScrollPage from '@app/pages/InfiniteScroll';
import TodosWithAPIPage from '@app/pages/TodosWithAPI';
import TodosWithDataPage from '@app/pages/TodosWithData';
import { Layout } from '@app/components/Layout';
import { FullPageLoader } from '@app/components/FullPageLoader';
import { ROUTES } from '@app/constants';

export const Routing = ({ defaultRoute, data }) => (
  <Routes>
    <Route path="/" exact element={<Layout defaultRoute={defaultRoute} />}>
      <Route index element={<FullPageLoader />} />
      <Route path={ROUTES.pagination} Component={PaginationPage} />
      <Route path={ROUTES.advancedPagination} Component={AdvancedPaginationPage} />
      <Route path={ROUTES.infiniteScroll} Component={InfiniteScrollPage} />
      <Route path={ROUTES.todosWithAPI} Component={TodosWithAPIPage} />
      <Route path={ROUTES.todosWithData} element={<TodosWithDataPage {...data} />} />
    </Route>
  </Routes>
);
