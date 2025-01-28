import { useOverviewContext } from "../hooks/useOverviewContext";
import data from "../utils/rawCountriesData.json";

interface LocationsFormProps {
  onChange: (locationIndex: number) => void;
}

const LocationsForm: React.FC<LocationsFormProps> = ({ onChange }) => {
  const { overviewValue } = useOverviewContext();
  return (
    <form
      className={`max-w-sm mx-auto p-1 my-2 bg-slate-200 dark:bg-slate-800 rounded-md ${
        overviewValue === "LocationsForm.tsx" ? "shadow-borders-overview" : ""
      }`}>
      <label className='block mb-2 text-sm font-medium text-slate-800 dark:text-slate-300'>Select an option</label>
      <select
        onChange={(e) => {
          var num: number;
          num = parseInt(e.target.value);
          onChange(num);
        }}
        id='countries'
        className='bg-slate-300 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-300 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {data.map((i, j) => (
          <option
            value={j as number}
            key={j}>
            {"(" + i.Country + ") - " + i.Capital}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LocationsForm;
