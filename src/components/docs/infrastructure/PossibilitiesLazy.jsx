import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./Possibilities"));

export default function PossibilitiesLazy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
