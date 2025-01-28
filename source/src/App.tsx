import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
