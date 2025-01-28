import { TiChevronRight } from "react-icons/ti";

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
