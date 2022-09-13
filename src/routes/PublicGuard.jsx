import PropTypes from 'prop-types';
import useAuthStore from '@redux/hooks/useAuthStore';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes } from './routes';

const PublicGuard = ({ children }) => {
  const { isAuth } = useAuthStore();
  const location = useLocation();

  if (!isAuth) return <Outlet />;

  return (
    <Navigate to={PrivateRoutes.FEED} state={{ from: location }} replace />
  );
};

PublicGuard.propTypes = {
  children: PropTypes.func,
};

export default PublicGuard;
