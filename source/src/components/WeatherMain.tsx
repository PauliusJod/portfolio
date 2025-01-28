import { useOverviewContext } from "../hooks/useOverviewContext";
import Weather from "./Weather";

function WeatherMain(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div
      className={`bg-slate-200 dark:bg-slate-800 flex justify-center ${
        overviewValue === "WeatherMain.tsx" ? "shadow-borders-overview" : ""
      }`}>
      <Weather></Weather>
    </div>
  );
}
export default WeatherMain;
