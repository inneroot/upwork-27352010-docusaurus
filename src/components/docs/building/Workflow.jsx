import React, { Suspense } from "react";
import { CARDS, BUTTONS } from "../../common/cards";

const LazyComponent = React.lazy(() => import("../../common/Flow"));

export default function WorkFlow() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent CARDS={CARDS} BUTTONS={BUTTONS} />
    </Suspense>
  );
}
