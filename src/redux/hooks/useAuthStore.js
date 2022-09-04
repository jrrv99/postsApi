import { actions } from '@redux/authSlice';
import { auth } from '@services/firebase/firebase';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

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
    if (userInfo !== null) setAuth(userInfo);
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
