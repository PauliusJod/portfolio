import { useOverviewContext } from "../hooks/useOverviewContext";
import { records } from "../utils/expRecords";
import ExpComponent from "../components/ExpComponent";

function ExperiencePage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={`inline-block pt-4 ${overviewValue === "ExperiencePage.tsx" ? "shadow-borders-overview" : ""}`}>
      <p className='text-slate-800 dark:text-slate-300 text-xl shadow-borders p-1 font-bold rounded-md'>Experience</p>
      {records.map((val, i) => (
        <ExpComponent
          record={val}
          index={i}
        />
      ))}
    </div>
  );
}
export default ExperiencePage;
