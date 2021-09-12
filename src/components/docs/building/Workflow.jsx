import React, { Suspense } from "react";
import { CARDS, BUTTONS } from "../../common/cards";
import Flow from "../../common/Flow";

export default function WorkFlow() {
  return <Flow CARDS={CARDS} BUTTONS={BUTTONS} />;
}
