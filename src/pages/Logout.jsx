import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '@redux/hooks/useAuthStore';
import { logout } from '@services/firebase/auth';
import Page from '@components/Page';
import { PublicRoutes } from '@routes/routes';

const Logout = () => {
  const location = useLocation();
  const { resetAuth } = useAuthStore();
  useEffect(() => {
    logout();
    resetAuth();
  }, [resetAuth]);

  return (
    <Page title="logout">
      <h1>Closing session...</h1>
      <Navigate to={PublicRoutes.LOGIN} state={{ from: location }} replace />
    </Page>
  );
};

export default Logout;
