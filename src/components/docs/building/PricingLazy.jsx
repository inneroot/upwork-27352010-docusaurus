import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./Pricing"));

export default function PricingLazy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
