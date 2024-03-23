"use client";

import { createContext } from "@/lib/context";
import { ConfigurationType } from "@/types";
import { useState } from "react";

interface StateProviderContextProps {
  config: ConfigurationType;
  setConfig: (config: ConfigurationType) => void;
}

interface StateProviderProviderProps {
  children: React.ReactNode;
}

export const [StateProviderContextProvider, useStateProviderContext] =
  createContext<StateProviderContextProps>();

export const StateProvider = ({ children }: StateProviderProviderProps) => {
  const [config, setConfig] = useState<ConfigurationType>({
    service: "youtube",
    limitedAccess: "persist",
    sharePersonalInfo: true,
    shareLocation: true,
    shareUsageData: false,
    anonymize: false,
    enableAuditLogs: false,
  });

  return (
    <StateProviderContextProvider value={{ config, setConfig}}>
      {children}
    </StateProviderContextProvider>
  )
}