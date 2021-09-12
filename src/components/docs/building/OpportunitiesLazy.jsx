import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./Opportunities"));

export default function OpportunitiesLazy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
