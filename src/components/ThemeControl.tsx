import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

const ThemeControl = () => {
  const { theme, setTheme } = useTheme();
  const themeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex items-center">
      <p className="text-sm font-semibold">Dark</p>
      <Switch
        checked={theme === "dark" ? true : false}
        onChange={themeHandler}
        className={`${theme === "dark" ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 mx-2`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${theme === "dark" ? "translate-x-0" : "translate-x-4"}
            pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <p className="text-sm font-semibold">Light</p>
    </div>
  );
};

export default ThemeControl;
