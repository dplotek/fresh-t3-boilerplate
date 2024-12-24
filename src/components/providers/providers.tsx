"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <TRPCReactProvider>{children}</TRPCReactProvider>;
}
