import { Link } from "react-router-dom";
import { useOverviewContext } from "../hooks/useOverviewContext";

interface Props {
  project: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link: string;
  };
  index: number;
}

function ProjectComponent({ project, index }: Props): JSX.Element {
  const { overviewValue } = useOverviewContext();
  const showProject = project.link === "*" ? false : true;
  return (
    <div className='flex'>
      <Link
        to={project.link}
        className={`grid grid-rows-3 grid-flow-col max-w-sm p-6 ${
          overviewValue === "ProjectComponent.tsx" ? "shadow-borders-overview" : ""
        } border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ${
          !showProject && "disabled-link"
        }`}
        onClick={(e) => {
          if (!showProject) {
            e.preventDefault();
          }
        }}>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.title}</h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
        <div className='flex w-full text-slate-300 overflow-x-auto items-center'>
          {project.tags.map((v, i) => {
            var colorRed = Math.random() * 5 * 15;
            var colorBlue = Math.random() * 10 * 22;
            return (
              <div
                key={i}
                className='mx-2 my-2 px-3 py-1 rounded-md'
                style={{
                  backgroundColor: `rgba(${colorRed}, 100, ${colorBlue}, 0.6)`,
                  boxShadow: "0px 1px 15px 0px #00000034",
                }}>
                <p className='whitespace-nowrap text-sm'>{v}</p>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
}

export default ProjectComponent;
