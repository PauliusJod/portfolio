import { useEffect, useState } from "react";

function useSideBarState<T>(key: string, initialValue: string) {
  const [isMenuOpen, setMenuOpen] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(isMenuOpen));
  }, [isMenuOpen, key]);

  const toggleMenuOpen = () => {
    if (localStorage.getItem("menuOpen") === "opened") {
      setMenuOpen("-translate-x-full");
      localStorage.setItem("menuOpen", "closed");
    } else {
      setMenuOpen("");
      localStorage.setItem("menuOpen", "opened");
    }
  };

  return [isMenuOpen, toggleMenuOpen] as const;
}

export default useSideBarState;
