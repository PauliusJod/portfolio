import { useEffect, useState } from "react";
import { fetchWeatherAsync } from "../state/weather/weatherSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import LocationsForm from "./LocationsForm";
import data from "../utils/rawCountriesData.json";
import { useOverviewContext } from "../hooks/useOverviewContext";

const inputStyle =
  "px-2 py-1 mb-2 border rounded-sm w-36 bg-slate-300 dark:bg-gray-900 text-slate-900 dark:text-slate-300";

const schema = z.object({
  latitude: z.string().min(2),
  longitude: z.string().min(2),
  rainChecked: z.boolean(),
  windChecked: z.boolean(),
});

type FormFields = z.infer<typeof schema>;
interface TimeIntervalProp {
  onChange: () => void;
}
const WeatherRequestForm: React.FC<TimeIntervalProp> = ({ onChange }) => {
  const { overviewValue } = useOverviewContext();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedLocation, setSelectedLocation] = useState<number>(0);
  const handleLocationChange = (locationIndex: number) => {
    setSelectedLocation(locationIndex);
  };

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      latitude: "53.9", // max 85 -85
      longitude: "23.9", // max 180 -180
      rainChecked: true,
      windChecked: true,
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("latitude", data[selectedLocation]?.Latitude.toString() || "1");
    setValue("longitude", data[selectedLocation]?.Longitude.toString() || "1");
  }, [selectedLocation]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await dispatch(fetchWeatherAsync({ weatherForm: data }));
      onChange();
    } catch (error) {
      setError("root", { message: "Something wrong.." });
    }
  };

  return (
    <div
      className={`w-full bg-slate-200 dark:bg-slate-800 border-none ring-none ${
        overviewValue === "WeatherRequestForm.tsx" ? "shadow-borders-overview" : ""
      }`}
      onSubmit={handleSubmit(onSubmit)}>
      <LocationsForm onChange={handleLocationChange}></LocationsForm>
      <form>
        <div className='flex justify-center m-4 gap-4'>
          <div className='grid grid-rows-2 gap-2'>
            <div className='flex justify-end items-center gap-2'>
              <p className='text-slate-900 dark:text-slate-100 text-md'>Show rain</p>
              <input
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                {...register("rainChecked")}
                type='checkbox'></input>
            </div>
            <div className='flex justify-end items-center gap-2'>
              <p className='text-slate-900 dark:text-slate-100 text-md'>Show wind</p>
              <input
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                {...register("windChecked")}
                type='checkbox'></input>
            </div>
          </div>
          <div className='grid grid-rows-2 gap-2'>
            <div className='block items-center'>
              <input
                className={inputStyle}
                {...register("latitude")}
                type='number'
                step='0.000001'
                placeholder='Latitude'
                min='-85'
                max='85'
              />
              {errors.latitude && <div className='text-red-600'>{errors.latitude.message}</div>}
            </div>
            <div>
              <input
                className={inputStyle}
                {...register("longitude")}
                type='number'
                step='0.000001'
                placeholder='Longitude'
                min='-180'
                max='180'
              />
              {errors.longitude && <div className='text-red-600'>{errors.longitude.message}</div>}
            </div>
          </div>
        </div>
        {errors.root && <div className='text-red-600'>{errors.root.message}</div>}
        <button
          disabled={isSubmitting}
          className='text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-900 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700'
          type='submit'>
          {isSubmitting ? "Loading.." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default WeatherRequestForm;
