import PropTypes from 'prop-types';
import useAuthStore from '@redux/hooks/useAuthStore';
import { useLocation, Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuth } = useAuthStore();
  const location = useLocation();

  if (!isAuth) return children;

  return <Navigate to="/" state={{ from: location }} replace />;
};

PublicRoute.propTypes = {
  children: PropTypes.func,
};

export default PublicRoute;
