import { useState } from "react";
import { Link } from "react-router-dom";
import { useOverviewContext } from "../hooks/useOverviewContext";

const defaultStyle =
  "flex items-center justify-center transition-colors px-3 h-8 leading-tight font-bold text-gray-500 bg-slate-100 border border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-slate-200";
const toggleStyle =
  "z-10 flex items-center justify-center transition-colors px-3 h-8 leading-tight font-bold text-blue-600 border border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900 dark:hover:text-slate-200";

function NavigationLayout(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  const [toggled, setToggled] = useState<number>(0);
  return (
    <div
      className={`flex-row justify-center py-10 bg-slate-200 dark:bg-slate-800 text-black-900 dark:text-slate-200 ${
        overviewValue === "NavigationLayout.tsx" ? "shadow-borders-overview" : ""
      }`}>
      <nav aria-label='Page navigation example'>
        <ul className='flex justify-center -space-x-px h-8 text-sm my-2'>
          <li>
            <Link
              to='/portfolio/'
              onClick={() => setToggled(1)}
              className={`rounded-s-lg ${toggled === 1 ? toggleStyle : defaultStyle}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/portfolio/projects'
              onClick={() => setToggled(2)}
              className={`rounded-e-lg ${toggled === 2 ? toggleStyle : defaultStyle}`}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavigationLayout;
