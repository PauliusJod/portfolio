import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 relative z-10";

type sliderProps = {
  selected: string;
  setMode: (mode: string) => void;
};
const ThemeSlider = () => {
  const [selected, setSelected] = useState<string>("dark");
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setSelected("dark");
      document.documentElement.classList.add("dark");
    } else {
      setSelected("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
  const setMode = (mode: string) => {
    setSelected(mode === "dark" ? "light" : "dark");
    if (mode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className='grid place-content-center px-4 bg-slate-200 dark:bg-slate-700'>
      <SliderToggle
        selected={selected}
        setMode={setMode}
      />
    </div>
  );
};

const SliderToggle = ({ selected, setMode }: sliderProps) => {
  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-slate-300"}`}
        onClick={() => {
          setMode("dark");
        }}>
        <FiSun className='relative z-10 text-lg md:text-sm' />
        <span className='relative z-10'>Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-slate-800"}`}
        onClick={() => {
          setMode("light");
        }}>
        <FiMoon className='relative z-10 text-lg md:text-sm' />
        <span className='relative z-10'>Dark</span>
      </button>
      <div className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"}`}>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600'
        />
      </div>
    </div>
  );
};

export default ThemeSlider;
