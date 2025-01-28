import WeatherDisplay from "./WeatherDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import WeatherRequestForm from "./WeatherRequestForm";
import { useEffect, useState } from "react";
import { MdOutlineShowChart } from "react-icons/md";
import { useOverviewContext } from "../hooks/useOverviewContext";

const Weather = () => {
  const { overviewValue } = useOverviewContext();
  const [render, setRender] = useState<number>(0);
  const time = useSelector((state: RootState) => state.weather.dayTime);
  const temperature = useSelector((state: RootState) => state.weather.dayTemperature);
  const precipitation = useSelector((state: RootState) => state.weather.dayPrecipitation);
  const wind = useSelector((state: RootState) => state.weather.dayWind);
  const handleTimeIntervalChange = () => {
    setRender((prev) => prev + 1);
  };
  useEffect(() => {
    if (Object.keys(temperature).length > 0) {
      setRender((prev) => prev + 1);
    }
  }, []);
  return (
    <div
      className={`w-[800px] flex-row justify-center rounded-sm shadow-borders-main ${
        overviewValue === "Weather.tsx" ? "shadow-borders-overview" : ""
      }`}>
      <WeatherRequestForm onChange={handleTimeIntervalChange}></WeatherRequestForm>
      {render > 0 ? (
        <WeatherDisplay
          key={render}
          time={time}
          temperature={temperature}
          precipitation={precipitation}
          wind={wind}
        />
      ) : (
        <div className='flex items-center justify-center border-t-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-500 p-6 font-bold'>
          <p className='px-2 text-lg'>Zero data selected</p>
          <MdOutlineShowChart
            size={30}
            className='text-slate-600 dark:text-slate-400'></MdOutlineShowChart>
        </div>
      )}
    </div>
  );
};

export default Weather;
