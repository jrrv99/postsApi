import PropTypes from 'prop-types';
import useAuthStore from '@redux/hooks/useAuthStore';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuthStore();
  const location = useLocation();

  if (!isAuth)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.func,
};

export default PrivateRoute;
