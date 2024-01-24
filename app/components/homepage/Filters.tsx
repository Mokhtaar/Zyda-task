"use client";
import { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import DropdownFilter from "./Dropdown";
import { FiltersProps } from "../../types";

const Filters = ({
  countriesToSearch,
  setDisplayedCountries,
  searchKeyword,
  setSearchKeyword,
  dropdownOption,
  setDropdownOption,
}: FiltersProps) => {
  useEffect(() => {
    const filterResult = countriesToSearch.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchKeyword.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(searchKeyword.toLowerCase())
    );
    setDisplayedCountries(filterResult);
    setDropdownOption("Filter by Region");
  }, [searchKeyword]);

  return (
    <div className="flex flex-col py-7 space-y-7 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
      <div className="w-full max-w-lg lg:max-w-lg">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 sm:pl-7">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400 dark:text-gray-300"
              aria-hidden="true"
            />
          </div>
          <input
            onChange={(e) => setSearchKeyword(e.target.value)}
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-white dark:bg-gray-700/35 py-2.5 sm:py-3.5 pl-14 sm:pl-16 pr-3 text-gray-900 dark:text-gray-200 dark:ring-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search for a country..."
            type="search"
          />
        </div>
      </div>
      <DropdownFilter
        countriesToSearch={countriesToSearch}
        setDisplayedCountries={setDisplayedCountries}
        dropdownOption={dropdownOption}
        setDropdownOption={setDropdownOption}
      />
    </div>
  );
};

export default Filters;
