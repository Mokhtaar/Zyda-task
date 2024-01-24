import React from "react";
import ThemeSwitch from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="shadow-lg py-4 dark:bg-gray-700/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 flex justify-between items-center">
        <h1 className="sm:text-2xl font-bold">Where in the world</h1>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
