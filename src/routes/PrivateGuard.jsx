import PropTypes from 'prop-types';
import useAuthStore from '@redux/hooks/useAuthStore';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from './routes';

const PrivateGuard = ({ children }) => {
  const { isAuth } = useAuthStore();
  const location = useLocation();

  if (!isAuth)
    return (
      <Navigate to={PublicRoutes.LOGIN} state={{ from: location }} replace />
    );

  return <Outlet />;
};

PrivateGuard.propTypes = {
  children: PropTypes.func,
};

export default PrivateGuard;
