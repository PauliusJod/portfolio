import { projects } from "../utils/projects";
import ProjectComponent from "../components/ProjectComponent";
import { useOverviewContext } from "../hooks/useOverviewContext";
import githubImage from "../utils/github.png";

function ProjectsPage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={`flex justify-center ${overviewValue === "ProjectsPage.tsx" ? "shadow-borders-overview" : ""}`}>
      <div className='w-[800px] bg-slate-200 dark:bg-slate-800 border-none rounded-sm border-slate-400 dark:border-slate-700'>
        <div className='grid grid-cols-2 gap-y-4'>
          {projects.map((val, i) => (
            <>
              <ProjectComponent
                project={val}
                index={i}
              />
            </>
          ))}
        </div>
        <div className='flex justify-center align-bottom p-4 mt-8 shadow-sm shadow-slate-400 dark:shadow-slate-700 hover:shadow-slate-500 dark:hover:shadow-slate-600 text-slate-800 dark:text-slate-300 font-semibold'>
          <img
            className='mx-2'
            width={26}
            src={githubImage}
            alt='github icon'></img>
          <a
            className='hover:animate-bounce'
            target='black'
            href='https://github.com/PauliusJod'>
            Click to see more projects
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
