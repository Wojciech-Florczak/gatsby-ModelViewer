import React from 'react';

const LazyModelViewer = React.lazy(() => import('./ModelViewer'));

const LoadableModelViewer = (props) => {
  const isSSR = typeof window === 'undefined';

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <LazyModelViewer {...props} />
        </React.Suspense>
      )}
    </>
  );
};

export default LoadableModelViewer;
