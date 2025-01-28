export interface dataObject {
  label: string;
  code: string;
}
export type DataType = {
  "/portfolio/": dataObject[];
  "/portfolio/projects": dataObject[];
  "/portfolio/projects/weather": dataObject[];
};

export const data: DataType = {
  "/portfolio/": [
    {
      label: "HomePage.tsx",
      code: `import ExperiencePage from "./ExperiencePage";
import AboutMePage from "./AboutMePage";
import { useOverviewContext } from "../hooks/useOverviewContext";

function HomePage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={\`flex justify-center \${overviewValue === "HomePage.tsx" ? "shadow-borders-overview" : ""}\`}>
      <div className='w-[800px] bg-slate-200 dark:bg-slate-800 border-none rounded-sm border-slate-400 dark:border-slate-700'>
        <AboutMePage></AboutMePage>
        <ExperiencePage></ExperiencePage>
      </div>
    </div>
  );
}
export default HomePage;
`,
    },
    {
      label: "ExperiencePage.tsx",
      code: `import { useOverviewContext } from "../hooks/useOverviewContext";
import { records } from "../utils/expRecords";
import ExpComponent from "../components/ExpComponent";

function ExperiencePage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={\`inline-block pt-4 \${overviewValue === "ExperiencePage.tsx" ? "shadow-borders-overview" : ""}\`}>
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
`,
    },
    {
      label: "ExpComponent.tsx",
      code: `import { useOverviewContext } from "../hooks/useOverviewContext";

interface Props {
  record: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
  index: number;
}

function ExpComponent({ record, index }: Props): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <>
      <div
        key={index}
        className={\`w-[800px] my-2 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-gray-800 border rounded-md border-[#00000024] dark:border-[#00000034] shadow-borders \${overviewValue === "ExpComponent.tsx" ? "shadow-borders-overview" : ""
        }\`}>
        <div className='grid grid-cols-3 gap-1'>
          <div className='flex items-center justify-center text-slate-900 dark:text-slate-200 text-sm'>
            {record.date}
          </div>
          <div className='col-span-2'>
            <div className='font-bold py-2 text-slate-900 dark:text-slate-100 text-lg'>{record.title}</div>
            <div className='pb-2 text-slate-900 dark:text-slate-200 mx-3 text-sm'>{record.description}</div>
            <div className='flex w-full text-slate-200 text-xs overflow-x-auto items-center custom-scrollbar'>
              {record.tags.map((v, i) => {
                var colorRed = Math.random() * 5 * 15;
                var colorBlue = Math.random() * 10 * 22;
                return (
                  <div
                    key={i}
                    className='mx-2 my-2 px-3 py-1 rounded-md dark:experience-shadow-borders'
                    style={{
                      backgroundColor: \`rgba(\${colorRed}, 100, \${colorBlue}, 0.6)\`,
                    }}>
                    <p className='whitespace-nowrap text-sm'>{v}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpComponent;
`,
    },
    {
      label: "NoPage.tsx",
      code: `import { Link } from "react-router-dom";
      
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
      `,
    },
    {
      label: "NavigationLayout.tsx",
      code: `import { useState } from "react";
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
            className={\`flex-row justify-center py-10 bg-slate-200 dark:bg-slate-800 text-black-900 dark:text-slate-200 \${
              overviewValue === "NavigationLayout.tsx" ? "shadow-borders-overview" : ""
            }\`}>
            <nav aria-label='Page navigation example'>
              <ul className='flex justify-center -space-x-px h-8 text-sm my-2'>
                <li>
                  <Link
                    to='/portfolio/'
                    onClick={() => setToggled(1)}
                    className={\`rounded-s-lg \${toggled === 1 ? toggleStyle : defaultStyle}\`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/portfolio/projects'
                    onClick={() => setToggled(2)}
                    className={\`rounded-e-lg \${toggled === 2 ? toggleStyle : defaultStyle}\`}>
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      }
      export default NavigationLayout;
      `,
    },
    {
      label: "Toolbar.tsx",
      code: `import { TiChevronRight } from "react-icons/ti";

interface ToggleButtonProps {
  toggleMenuOpen: () => void;
}

function Toolbar({ toggleMenuOpen }: ToggleButtonProps): JSX.Element {
  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl mx-auto p-4 fixed left-2 top-1/2'>
          <button
            className='flex items-center space-x-3 rtl:space-x-reverse'
            onClick={toggleMenuOpen}>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white animate-pulse hover:animate-none'>
              <TiChevronRight />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Toolbar;
`,
    },
    {
      label: "App.tsx",
      code: `import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import WeatherMain from "./components/WeatherMain";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import NavigationLayout from "./pages/NavigationLayout";
import ExperiencePage from "./pages/ExperiencePage";
import SidebarComponent from "./components/SidebarComponent";
import Toolbar from "./pages/Toolbar";
import useSideBarState from "./hooks/useSideBarState";
import ProjectsPage from "./pages/ProjectsPage";
import { OverviewContext } from "./hooks/useOverviewContext";
import { useState } from "react";

function App(): JSX.Element {
  const [overviewValue, setOverviewValue] = useState<string>("");

  const [isMenuOpen, toggleMenuOpen] = useSideBarState<string>("menuState", "-translate-x-full");

  return (
    <div className='App flex-row'>
      <OverviewContext.Provider value={{ overviewValue, setOverviewValue }}>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: (
                <>
                  <Toolbar toggleMenuOpen={toggleMenuOpen} />
                  <SidebarComponent
                    isMenuOpen={isMenuOpen}
                    toggleMenuOpen={toggleMenuOpen}
                  />
                  <NavigationLayout />
                  <Outlet />
                </>
              ),
              children: [
                { path: "/portfolio/", element: <HomePage /> },
                { path: "/portfolio/exp", element: <ExperiencePage /> },
                { path: "/portfolio/projects", element: <ProjectsPage /> },
                { path: "/portfolio/projects/weather", element: <WeatherMain /> },
              ],
            },
            { path: "*", element: <NoPage /> },
          ])}
        />
      </OverviewContext.Provider>
    </div>
  );
}

export default App;
`,
    },
    {
      label: "SidebarComponent.tsx",
      code: `import { useEffect, useState } from "react";
import { TiChevronLeft } from "react-icons/ti";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Controlled as CodeMirror } from "react-codemirror2";
import { projects } from "../utils/projects";
import { data, DataType, dataObject } from "../utils/sidebarData";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import { useLocation } from "react-router-dom";
import ThemeSlider from "./ThemeSlider";
import { useOverviewContext } from "../hooks/useOverviewContext";

interface SidebarProps {
  isMenuOpen: string;
  toggleMenuOpen: () => void;
}

function SidebarComponent({ isMenuOpen, toggleMenuOpen }: SidebarProps): JSX.Element {
  const { setOverviewValue } = useOverviewContext();
  const location = useLocation();
  const [popUpCode, setPopUpCode] = useState("");
  const [popUpLabel, setPopUpLabel] = useState("");
  const [mouseOver, setMouseOver] = useState("out");
  const [code, setCode] = useState<dataObject[]>([]);
  const [pageLabel, setPageLabel] = useState<string | undefined>("");

  useEffect(() => {
    if (location.pathname) {
      const projectLabel = projects.find((project) => project.link === location.pathname);
      setPageLabel(projectLabel?.title);
      const codes = data[location.pathname as keyof DataType];
      setCode(codes);
    }
  }, [location]);
  return (
    <>
      <div
        id='drawer-navigation'
        className={\`fixed top-0 left-0 z-40 w-[30%] min-w-64 h-screen p-4 overflow-y-auto transition-transform \${isMenuOpen} bg-slate-200 dark:bg-slate-700 shadow-borders-sidebar\`}
        tabIndex={1}
        aria-labelledby='drawer-navigation-label'>
        <div
          className='absolute right-6 top-1/2 cursor-pointer p-2'
          onClick={toggleMenuOpen}>
          <TiChevronLeft
            size={25}
            className='text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white animate-pulse hover:animate-none fixed'
          />
        </div>
        {pageLabel && <p className='text-lg text-slate-800 dark:text-slate-200 font-semibold'>{pageLabel}</p>}
        <div className='flex justify-between items-center text-slate-500 dark:text-slate-300 hover:text-slate-800 rounded-md p-2 dark:hover:text-slate-200 shadow-borders-sidebar-2'>
          <IoMdInformationCircleOutline size={25} />
          <h5
            id='drawer-navigation-label'
            className='text-lg font-semibold text-slate-600 dark:text-slate-400'>
            Code viewer
          </h5>
          <ThemeSlider></ThemeSlider>
        </div>
        <div
          key={mouseOver.length}
          className={\`mt-4 text-sm text-slate-600 dark:text-slate-400 \${mouseOver === "over" ? "animate-bounce" : ""}\`}>
          Double click to review the code
        </div>
        <div
          className={\`mt-2 text-sm text-slate-600 dark:text-slate-400 \${mouseOver === "over" ? "animate-bounce" : ""}\`}>
          Hover code to highlight component
        </div>
        <div
          className='py-4 pr-10'
          onMouseOver={() => setMouseOver("over")}
          onMouseOut={() => setMouseOver("out")}>
          {code && (
            <ul
              className='space-y-2 font-medium'
              key={code.length}>
              {code.length > 0 &&
                code.map((val, index) => (
                  <>
                    <h2 className='text-slate-900 dark:text-slate-200 text-lg'>{val.label}</h2>
                    <li
                      onMouseEnter={(e) => setOverviewValue(val.label)}
                      onMouseLeave={(e) => setOverviewValue("")}>
                      <CodeMirror
                        key={index}
                        value={val.code}
                        className='bg-no-repeat bg-left-top'
                        options={{
                          mode: "xml",
                          theme: "material",
                          lineNumbers: true,
                          tabSize: 2,
                        }}
                        onBeforeChange={() => {}}
                        onDblClick={() => (setPopUpCode(val.code), setPopUpLabel(val.label))}
                      />
                    </li>
                  </>
                ))}
            </ul>
          )}
        </div>
      </div>
      {popUpCode.includes("<") && popUpCode.includes(">") && (
        <div
          className='fixed z-50 inset-0 bg-opacity-60 bg-gray-900 flex justify-center items-center'
          style={{ pointerEvents: "auto" }}>
          <div className='relative w-5/6 bg-slate-300 dark:bg-slate-800 p-2 rounded-md shadow-borders-main'>
            <p className='text-lg font-semibold text-slate-700 dark:text-slate-500 py-2'>{popUpLabel}</p>
            <CodeMirror
              value={popUpCode}
              options={{
                mode: "xml",
                theme: "material",
                lineNumbers: true,
                tabSize: 2,
                indentUnit: 2,
                lineWrapping: true,
                readOnly: true,
                viewportMargin: 100,
              }}
              className='reviewCode'
              onBeforeChange={() => {}}
              onDblClick={() => (setPopUpCode(""), setPopUpLabel(""))}
            />
            <button
              type='button'
              onClick={() => setPopUpCode("")}
              className='py-2.5 px-5 me-2 mt-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SidebarComponent;
`,
    },
  ],
  "/portfolio/projects": [
    {
      label: "ProjectsPage.tsx",
      code: `import { projects } from "../utils/projects";
import ProjectComponent from "../components/ProjectComponent";
import { useOverviewContext } from "../hooks/useOverviewContext";
import githubImage from "../utils/github.png";

function ProjectsPage(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div className={\`flex justify-center \${overviewValue === "ProjectsPage.tsx" ? "shadow-borders-overview" : ""}\`}>
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
`,
    },
    {
      label: "ProjectComponent.tsx",
      code: `import { Link } from "react-router-dom";
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
        className={\`grid grid-rows-3 grid-flow-col max-w-sm p-6 \${
          overviewValue === "ProjectComponent.tsx" ? "shadow-borders-overview" : ""
        } border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 \${
          !showProject && "disabled-link"
        }\`}
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
                  backgroundColor: \`rgba(\${colorRed}, 100, \${colorBlue}, 0.6)\`,
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
`,
    },
  ],
  "/portfolio/projects/weather": [
    {
      label: "LocationsForm.tsx",
      code: `import { useOverviewContext } from "../hooks/useOverviewContext";
import data from "../utils/rawCountriesData.json";

interface LocationsFormProps {
  onChange: (locationIndex: number) => void;
}

const LocationsForm: React.FC<LocationsFormProps> = ({ onChange }) => {
  const { overviewValue } = useOverviewContext();
  return (
    <form
      className={\`max-w-sm mx-auto p-1 my-2 bg-slate-200 dark:bg-slate-800 rounded-md \${
        overviewValue === "LocationsForm.tsx" ? "shadow-borders-overview" : ""
      }\`}>
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
`,
    },
    {
      label: "WeatherRequestForm.tsx",
      code: `import { useEffect, useState } from "react";
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
      className={\`w-full bg-slate-200 dark:bg-slate-800 border-none ring-none \${
        overviewValue === "WeatherRequestForm.tsx" ? "shadow-borders-overview" : ""
      }\`}
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
`,
    },
    {
      label: "WeatherMain.tsx",
      code: `import { useOverviewContext } from "../hooks/useOverviewContext";
import Weather from "./Weather";

function WeatherMain(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  return (
    <div
      className={\`bg-slate-200 dark:bg-slate-800 flex justify-center \${
        overviewValue === "WeatherMain.tsx" ? "shadow-borders-overview" : ""
      }\`}>
      <Weather></Weather>
    </div>
  );
}
export default WeatherMain;
`,
    },
    {
      label: "Weather.tsx",
      code: `import WeatherDisplay from "./WeatherDisplay";
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
      className={\`w-[800px] flex-row justify-center rounded-sm shadow-borders-main \${
        overviewValue === "Weather.tsx" ? "shadow-borders-overview" : ""
      }\`}>
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
`,
    },
    {
      label: "WeatherDisplay.tsx",
      code: `import { useState } from "react";
import WeatherChart from "./WeatherChart";
import TimeIntervalForm from "./TimeIntervalForm";
import WeatherDaily from "./WeatherDaily";
import { useOverviewContext } from "../hooks/useOverviewContext";
const th = "px-6 py-3";
const td = "px-6 py-2";
type Props = {
  time: object;
  temperature: object;
  precipitation: object;
  wind: object;
};

function WeatherDisplay({ time, temperature, precipitation, wind }: Props): JSX.Element {
  const { overviewValue } = useOverviewContext();
  const [interval, setInterval] = useState<number>(6);
  const handleTimeIntervalChange = (TimeInterval: number) => {
    setInterval(TimeInterval);
  };

  const timeArray = Object.values(time).filter((_, index) => index % interval === 0);
  const tempArray = Object.values(temperature).filter((_, index) => index % interval === 0);
  const precipitationArray = Object.values(precipitation).filter((_, index) => index % interval === 0);
  const windArray = Object.values(wind).filter((_, index) => index % interval === 0);

  function fixedDate(data: Date) {
    const date = new Date(data);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const time = date.toLocaleTimeString([], { hour: "2-digit" });
    return (
      <div>
        {month} {day}
        <br /> {time}
      </div>
    );
  }

  return (
    <div
      className={\`flex-auto justify-center max-h-[800px] mb-10 overflow-auto max-w-[800px] border-t-4 border-slate-300 dark:border-slate-700 \${
        overviewValue === "WeatherDisplay.tsx" ? "shadow-borders-overview" : ""
      }\`}>
      {tempArray.length > 0 ? (
        <div className='block my-4'>
          <WeatherDaily></WeatherDaily>
          <WeatherChart
            key={tempArray[0] + interval + tempArray.length}
            timeA={timeArray}
            tempA={tempArray}
            precA={precipitationArray}
            windA={windArray}></WeatherChart>
          <TimeIntervalForm onChange={handleTimeIntervalChange}></TimeIntervalForm>
        </div>
      ) : (
        <></>
      )}

      <div className='relative overflow-auto mx-10 ring-2 ring-slate-300 dark:ring-slate-600'>
        <table className='w-full text-sm text-left rtl:text-right border-2 border-slate-400 dark:border-slate-700 text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-slate-300 dark:bg-slate-700 dark:text-gray-400'>
            <tr>
              <th
                scope='col'
                className={th}>
                Time
              </th>
              <th
                scope='col'
                className={th}>
                Temp (°C)
              </th>
              {precipitationArray.length > 0 ? (
                <th
                  scope='col'
                  className={th}>
                  Precipitation <sup>(%)</sup>
                </th>
              ) : (
                <></>
              )}
              {windArray.length > 0 ? (
                <th
                  scope='col'
                  className={th}>
                  Wind <sup>(km/h)</sup>
                </th>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            {timeArray.map((_, i) => (
              <tr
                key={i}
                className={\`bg-slate-200 border-slate-800 \${
                  (i + 1) % (24 / interval) === 0 ? "border-b-4" : "border-b"
                } dark:bg-slate-800 dark:border-gray-700\`}>
                <td className={td}>{fixedDate(timeArray[i])}</td>
                <td className={td}>{tempArray[i]}</td>
                {precipitationArray.length ? <td className={td}>{precipitationArray[i]}</td> : <></>}
                {windArray.length ? <td className={td}>{windArray[i]}</td> : <></>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherDisplay;
`,
    },
    {
      label: "WeatherDaily.tsx",
      code: `import { useEffect, useState } from "react";
import WeatherDailyCard from "./WeatherDailyCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { sortTime, sortTemp, sortPrec, sortWind, getTime, getTemp, getPrec, getWind } from "../utils/utils";
import { resetDayWeather, setPrecipitation, setTemperature, setTime, setWind } from "../state/weather/weatherSlice";
import React from "react";
import { useOverviewContext } from "../hooks/useOverviewContext";

function WeatherDaily(): JSX.Element {
  const { overviewValue } = useOverviewContext();
  const [choosenDay, setChoosenDay] = useState<number>(7);
  const dispatch = useDispatch<AppDispatch>();

  const handleChoosenDayChange = (choosenDay: number) => {
    setChoosenDay(choosenDay);
  };
  useEffect(() => {
    if (choosenDay === 7) {
      dispatch(resetDayWeather());
    } else {
      dispatch(setTime({ index: choosenDay }));
      dispatch(setTemperature({ index: choosenDay }));
      dispatch(setPrecipitation({ index: choosenDay }));
      dispatch(setWind({ index: choosenDay }));
    }
  }, [choosenDay]);
  const time = useSelector((state: RootState) => state.weather.time);
  const temperature = useSelector((state: RootState) => state.weather.temperature);
  const precipitation = useSelector((state: RootState) => state.weather.precipitation);
  const wind = useSelector((state: RootState) => state.weather.wind);
  const days = Array(7).fill(null);

  const sortedDays = React.useMemo(
    () => [
      ...days.map((_, i) => ({
        label: null,
        time: sortTime(i + 1, time),
        temp: sortTemp(i + 1, temperature),
        prec: sortPrec(i + 1, precipitation),
        wind: sortWind(i + 1, wind),
      })),
      {
        label: "Weekly",
        time: getTime(time),
        temp: getTemp(temperature),
        prec: getPrec(precipitation),
        wind: getWind(wind),
      },
    ],
    [days]
  );
  return (
    <div
      className={\`grid gap-1 grid-cols-8 text-slate-200 my-auto px-2 \${
        overviewValue === "WeatherDaily.tsx" ? "shadow-borders-overview" : ""
      }\`}>
      {sortedDays.map((_, i) => (
        <WeatherDailyCard
          key={i}
          index={i}
          label={_.label}
          toggled={choosenDay === i}
          time={_.time}
          temp={_.temp}
          prec={_.prec}
          wind={_.wind}
          onChange={handleChoosenDayChange}
        />
      ))}
    </div>
  );
}

export default WeatherDaily;
`,
    },
    {
      label: "WeatherDailyCard.tsx",
      code: `import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { BsCalendar3Week } from "react-icons/bs";
import { useOverviewContext } from "../hooks/useOverviewContext";

type WeatherProps = {
  index: number;
  label: string | null;
  time: object[];
  temp: object;
  prec: object;
  wind: object;
  toggled: boolean;
};
interface ChoosenDayProp {
  onChange: (choosenDay: number) => void;
}
const WeatherDailyCard: React.FC<WeatherProps & ChoosenDayProp> = React.memo(
  ({ index, label, time, temp, prec, wind, toggled, onChange }) => {
    const { overviewValue } = useOverviewContext();
    const WeekDay = () => {
      const data = Object.values(time)[0] as Date;
      const date = new Date(data);
      const day = date.toLocaleString("default", { weekday: "short" });
      return day;
    };

    const DayTemp = () =>
      (
        Object.values(temp)
          .slice(6, 18)
          .reduce((acc, curr) => acc + curr, 0) /
        (Object.keys(temp).length / 2)
      ).toFixed(0);
    const NightTemp = () =>
      (
        Object.values(temp)
          .slice(18)
          .concat(Object.values(temp).slice(0, 6))
          .reduce((acc, curr) => acc + curr, 0) /
        (Object.keys(temp).length / 2)
      ).toFixed(0);
    return (
      <button
        className={\`bg-slate-300 dark:bg-slate-800 transition-colors border rounded-sm border-slate-500 hover:bg-slate-200 dark:border-slate-700 dark:hover:bg-slate-900 \${
          toggled
            ? "shadow-sm shadow-orange-900 dark:shadow-orange-500 hover:shadow-sm hover:shadow-orange-500 dark:hover:shadow-orange-900"
            : ""
        } \${overviewValue === "WeatherDailyCard.tsx" ? "shadow-borders-overview" : ""}\`}
        onClick={() => onChange(index)}>
        {label ? (
          <>
            <p className='text-yellow-800 dark:text-yellow-400'>{label}</p>
            <BsCalendar3Week
              size={35}
              className='mx-auto text-slate-700 dark:text-slate-100'
            />
          </>
        ) : (
          <>
            <div className='flex justify-between text-xs px-2'>
              <p className='text-yellow-800 dark:text-yellow-500'>{DayTemp()} °C</p>
              <p className='text-slate-800 dark:text-slate-400'>{NightTemp()} °C</p>
            </div>
            <TiWeatherCloudy
              size={45}
              className='mx-auto text-slate-700 dark:text-slate-100'
            />
            <p className='text-sm text-slate-700 dark:text-slate-100'>{WeekDay()}</p>
            <p className='text-sm text-slate-700 dark:text-slate-100'>Celcius</p>
          </>
        )}
      </button>
    );
  }
);

export default WeatherDailyCard;
`,
    },
    {
      label: "WeatherChart.tsx",
      code: `import { useEffect, useState } from "react";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, ComposedChart } from "recharts";
import { precipitationChart, tempChart, windChart } from "../utils/chartUtils";

type WeatherProps = {
  timeA: object[];
  tempA: object[];
  precA: object[];
  windA: object[];
};

function WeatherChart({ timeA, tempA, precA, windA }: WeatherProps): JSX.Element {
  const [chartData, setChartData] = useState<any>([]);
  const [showPrecipitation, setShowPrecipitation] = useState<boolean>(false);
  const [showTemp, setShowTemp] = useState<boolean>(false);
  const [showWind, setShowWind] = useState<boolean>(false);

  function formatDate(data: string) {
    const date = new Date(data);
    const time = date.toLocaleString("default", { hour: "2-digit", hour12: false });
    return \`\${time}:00\`;
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
      className='flex justify-center transition-colors shadow-borders-chart rounded-md bg-slate-300 dark:bg-slate-800 m-2 py-4'
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
                ? \`\${value}%\`
                : name === "temp"
                ? \`\${value}	°C\`
                : name === "wind"
                ? \`\${value} km/h\`
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
`,
    },
    {
      label: "TimeIntervalForm.tsx",
      code: `import { useEffect, useState } from "react";
import { useOverviewContext } from "../hooks/useOverviewContext";

const defaultStyle =
  "flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-gray-500 bg-slate-100 border border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
const toggleStyle =
  "z-10 flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-blue-600 border border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

interface TimeIntervalProp {
  onChange: (TimeInterval: number) => void;
}
const TimeIntervalForm: React.FC<TimeIntervalProp> = ({ onChange }) => {
  const { overviewValue } = useOverviewContext();
  const [interval, setInterval] = useState<number>(6);

  useEffect(() => {
    onChange(interval);
  }, [interval]);
  return (
    <>
      <nav aria-label='Page navigation example'>
        <ul
          className={\`flex justify-center -space-x-px h-8 text-sm my-2 font-bold \${
            overviewValue === "TimeIntervalForm.tsx" ? "shadow-borders-overview" : ""
          }\`}>
          <li>
            <a
              onClick={() => setInterval(2)}
              className={\`rounded-s-lg \${interval === 2 ? toggleStyle : defaultStyle}\`}>
              2
            </a>
          </li>

          <li>
            <a
              onClick={() => setInterval(4)}
              className={interval === 4 ? toggleStyle : defaultStyle}>
              4
            </a>
          </li>
          <li>
            <a
              onClick={() => setInterval(6)}
              className={\`rounded-e-lg \${interval === 6 ? toggleStyle : defaultStyle}\`}>
              6
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default TimeIntervalForm;
`,
    },
  ],
};
