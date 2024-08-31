import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout = ({ defaultRoute }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (defaultRoute) {
      navigate(defaultRoute);
    }
  }, []);

  return <Outlet />;
};
