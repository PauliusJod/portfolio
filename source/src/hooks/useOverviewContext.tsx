import { createContext, useContext } from "react";
interface OverviewContextType {
  overviewValue: string;
  setOverviewValue: (value: string) => void;
}
export const OverviewContext = createContext<OverviewContextType | undefined>(undefined);

export function useOverviewContext() {
  const overviewValue = useContext(OverviewContext);

  if (overviewValue === undefined) {
    throw new Error("useOverviewContext must be assigned");
  }

  return overviewValue;
}
