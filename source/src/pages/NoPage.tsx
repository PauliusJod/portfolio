import { Link } from "react-router-dom";

function NoPage(): JSX.Element {
  return (
    <div className='grid gap-2 py-10 bg-slate-200 dark:bg-slate-700 text-black-900 dark:text-slate-200 font-bold'>
      <p>Page not found!</p>
      <Link
        to='/portfolio/'
        className='py-2.5 px-5 me-2 mb-2 text-md font-medium text-slate-900 focus:outline-none bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-300 hover:text-slate-800 focus:z-10 focus:ring-4 focus:ring-slate-100 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-900'>
        Go back
      </Link>
    </div>
  );
}
export default NoPage;
