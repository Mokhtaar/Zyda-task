/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { CountriesProps } from "../../types";
import Filters from "./Filters";
import Link from "next/link";
import LoadMore from "./LoadMore";

export default function Countries({ countries }: CountriesProps) {
  const [dispalyedCountries, setDisplayedCountries] = useState(
    countries.slice(0, 12)
  );
  const [countriesToSearch, setCountriesToSearch] = useState(
    countries.slice(0, 12)
  );
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dropdownOption, setDropdownOption] = useState("Filter by Region");

  return (
    <>
      <Filters
        countriesToSearch={countriesToSearch}
        setDisplayedCountries={setDisplayedCountries}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        dropdownOption={dropdownOption}
        setDropdownOption={setDropdownOption}
      />
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-16"
      >
        {dispalyedCountries?.map((country) => (
          <li
            key={country.name.official}
            className="relative dark:bg-gray-700/35 shadow-md rounded-md"
          >
            <figure className="group aspect-h-10 aspect-w-13 block w-full overflow-hidden rounded-t-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <Link
                href={`/country-details/${country.name.common}`}
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {country.name.common}
                </span>
              </Link>
            </figure>
            <article className="pb-12 px-5">
              <h1 className="py-5 text-lg truncate font-bold tracking-tight">
                {country.name.official}
              </h1>
              <p className="pointer-events-none block text-sm">
                <span className="mr-2 font-semibold">Population:</span>
                {country.population}
              </p>
              <p className="pointer-events-none block text-sm">
                <span className="mr-2 font-semibold">Region:</span>
                {country.region}
              </p>
              <p className="pointer-events-none block text-sm">
                <span className="mr-2 font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </article>
          </li>
        ))}
      </ul>
      <LoadMore
        setDisplayedCountries={setDisplayedCountries}
        countries={countries}
        setCountriesToSearch={setCountriesToSearch}
        searchKeyword={searchKeyword}
        dropdownOption={dropdownOption}
      />
    </>
  );
}
