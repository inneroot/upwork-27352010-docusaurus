import React, { useState } from "react";
import { createStore, createApi } from "effector";
import { useStore } from "effector-react";
import styles from "./Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { calculateCost } from "./calc";
import clsx from "clsx";

