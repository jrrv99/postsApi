import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Loader, HomeHeader } from '@components';

const HomeLayout = () => {
  return (
    <div className="layout__container theme--dark">
      <HomeHeader />
      <main className="layout__content">
        <ErrorBoundary fallback={<h1>Ha ocurrido un Error</h1>}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default HomeLayout;
