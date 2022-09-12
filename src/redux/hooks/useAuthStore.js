import { actions } from '@redux/authSlice';
import { auth } from '@services/firebase/auth';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserAdapter from '@adapters/UserAdapter';

const useAuthStore = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector(store => store.auth);
  const [userInfo] = useAuthState(auth);

  const setAuth = useCallback(
    user => dispatch(actions.setAuth(user)),
    [dispatch]
  );
  const resetAuth = useCallback(
    () => dispatch(actions.resetAuth()),
    [dispatch]
  );

  useEffect(() => {
    if (userInfo !== null) setAuth(UserAdapter(userInfo));
  }, [userInfo, setAuth]);

  const value = useMemo(
    () => ({
      isAuth,
      user,
      resetAuth,
      setAuth,
    }),
    [isAuth, user, resetAuth, setAuth]
  );

  return value;
};

export default useAuthStore;
