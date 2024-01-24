import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { DropdownProps } from "../../types";

const filterOptions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

const DropdownFilter = ({
  countriesToSearch,
  setDisplayedCountries,
  dropdownOption,
  setDropdownOption,
}: DropdownProps) => {
  useEffect(() => {
    if (dropdownOption === "Filter by Region") {
      setDisplayedCountries(countriesToSearch);
      return;
    }
    const filterResult = countriesToSearch.filter(
      (country) => country.region === dropdownOption
    );
    setDisplayedCountries(filterResult);
  }, [dropdownOption, setDisplayedCountries]);

  return (
    <Listbox
      as="div"
      value={dropdownOption}
      onChange={setDropdownOption}
      className="relative sm:border-[0.1px] w-44 dark:border-none dark:bg-gray-700/35 dark:rounded-md inline-block"
    >
      <div className="flex">
        <Listbox.Button className="group shadow-md w-44 py-3.5 px-4 inline-flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
          {dropdownOption}
          <ChevronDownIcon
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100"
            aria-hidden="true"
          />
        </Listbox.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute py-2 left-0 sm:right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {filterOptions.map((option) => (
              <Listbox.Option key={option} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <a
                    className={classNames(
                      selected
                        ? "font-medium text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-200",
                      active ? "bg-gray-100 dark:bg-gray-500" : "",
                      "flex cursor-pointer px-4 py-1 text-sm"
                    )}
                  >
                    {option}
                  </a>
                )}
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default DropdownFilter;
