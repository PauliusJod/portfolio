import { useEffect, useState } from "react";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, ComposedChart } from "recharts";
import { precipitationChart, tempChart, windChart } from "../utils/chartUtils";
import { useOverviewContext } from "../hooks/useOverviewContext";

type WeatherProps = {
  timeA: object[];
  tempA: object[];
  precA: object[];
  windA: object[];
};

function WeatherChart({ timeA, tempA, precA, windA }: WeatherProps): JSX.Element {
  const { overviewValue } = useOverviewContext();
  const [chartData, setChartData] = useState<any>([]);
  const [showPrecipitation, setShowPrecipitation] = useState<boolean>(false);
  const [showTemp, setShowTemp] = useState<boolean>(false);
  const [showWind, setShowWind] = useState<boolean>(false);

  function formatDate(data: string) {
    const date = new Date(data);
    const time = date.toLocaleString("default", { hour: "2-digit", hour12: false });
    return `${time}:00`;
  }
  useEffect(() => {
    if (showPrecipitation && showTemp && showWind) {
      setShowPrecipitation(false);
      setShowTemp(false);
      setShowWind(false);
    }
  }, [showPrecipitation && showTemp && showWind]);
  const check = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    function formatData() {
      var data: Array<object> = [];
      timeA.map((j, i) => {
        data.push({ time: formatDate(j.toString()), temp: tempA[i], precipitation: precA[i], wind: windA[i] });
      });
      setChartData(data);
    }
    formatData();
  }, []);

  return (
    <div
      className={`flex justify-center transition-colors shadow-borders-chart rounded-md bg-slate-300 dark:bg-slate-800 m-2 py-4 ${
        overviewValue === "WeatherChart.tsx" ? "shadow-borders-overview" : ""
      }`}
      aria-details='sssssssss'>
      {chartData && (
        <ComposedChart
          width={600}
          height={300}
          data={chartData}>
          {tempChart(showWind, showPrecipitation, showTemp)}
          {precipitationChart(showWind, showPrecipitation, showTemp)}
          {windChart(showWind, showPrecipitation, showTemp)}
          <CartesianGrid stroke='#334155' />
          <XAxis
            height={50}
            dataKey='time'
            tickMargin={25}
            style={{ fontSize: "10px", fontWeight: 500, color: "#cbd5e1" }}
          />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#475569", borderRadius: "10px", fontWeight: 500, color: "#cbd5e1" }}
            formatter={(value: number, name: string) => {
              return name === "precipitation"
                ? `${value}%`
                : name === "temp"
                ? `${value}	°C`
                : name === "wind"
                ? `${value} km/h`
                : value;
            }}
          />
          <Legend
            onClick={(e) => {
              e.value === "precipitation"
                ? check(setShowPrecipitation)
                : e.value === "temp"
                ? check(setShowTemp)
                : e.value === "wind"
                ? check(setShowWind)
                : console.log("Show wind");
            }}
          />
        </ComposedChart>
      )}
    </div>
  );
}

export default WeatherChart;
