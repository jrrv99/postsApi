import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateGuard, PublicGuard } from '@routes';
import { PrivateRoutes, PublicRoutes } from '@routes/routes';
import { HomeLayout, Loader } from '@components';

const Home = lazy(() => import('@pages/Home/Home'));
const Login = lazy(() => import('@pages/Login/Login'));
const PostView = lazy(() => import('@pages/PostView'));
const UserView = lazy(() => import('@pages/UserView'));
const TagView = lazy(() => import('@pages/TagView'));
const Logout = lazy(() => import('@pages/Logout'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PublicGuard />}>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
          </Route>

          <Route element={<PrivateGuard />}>
            <Route element={<HomeLayout />}>
              <Route path={PrivateRoutes.FEED} element={<Home />} />
            </Route>
            <Route path={`${PrivateRoutes.USER}/:id`} element={<UserView />} />
            <Route path={`${PrivateRoutes.POST}/:id`} element={<PostView />} />
            <Route path={`${PrivateRoutes.TAG}/:tag`} element={<TagView />} />
            <Route path={PrivateRoutes.LOGOUT} element={<Logout />} />
          </Route>

          <Route path="*" element={<h1>404 - NOT FOUND</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
