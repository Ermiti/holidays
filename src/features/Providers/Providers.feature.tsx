"use client";
import React, { PropsWithChildren } from "react";
import { ThemeRegistry } from "./ThemeRegistry.feature";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export function Providers({ children }: PropsWithChildren) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
