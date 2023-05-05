"use client";

import React from "react";
import { ReactFlowProvider } from "reactflow";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

export default Providers;
