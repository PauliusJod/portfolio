import ExperiencePage from "./ExperiencePage";
import AboutMePage from "./AboutMePage";
import { useOverviewContext } from "../hooks/useOverviewContext";

function HomePage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={`flex justify-center ${overviewValue === "HomePage.tsx" ? "shadow-borders-overview" : ""}`}>
      <div className='w-[800px] bg-slate-200 dark:bg-slate-800 border-none rounded-sm border-slate-400 dark:border-slate-700'>
        <AboutMePage></AboutMePage>
        <ExperiencePage></ExperiencePage>
      </div>
    </div>
  );
}
export default HomePage;
