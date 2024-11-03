"use client";

import { PropsWithChildren } from "react";
import { TRPCProvider } from "./trpc-provider";

export default function Providers({ children }: PropsWithChildren) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
