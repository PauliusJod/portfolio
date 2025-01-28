import { useEffect, useState } from "react";
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
        className={`fixed top-0 left-0 z-40 w-[30%] min-w-64 h-screen p-4 overflow-y-auto transition-transform ${isMenuOpen} bg-slate-200 dark:bg-slate-700 shadow-borders-sidebar`}
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
          className={`mt-4 text-sm text-slate-600 dark:text-slate-400 ${mouseOver === "over" ? "animate-bounce" : ""}`}>
          Double click to review the code
        </div>
        <div
          className={`mt-2 text-sm text-slate-600 dark:text-slate-400 ${mouseOver === "over" ? "animate-bounce" : ""}`}>
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
