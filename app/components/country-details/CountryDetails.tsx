/* eslint-disable @next/next/no-img-element */
import BackButton from "@/app/components/country-details/BackButton";
import { CountryDetailsProps } from "@/app/types";

export default function CountryDetails({ country }: CountryDetailsProps) {
  const nativeNames = country[0].name.nativeName;
  const firstLanguageCode = Object.keys(nativeNames)[0];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-2">
        <BackButton />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-2">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-x-32">
          <img
            src={country[0].flags.svg}
            alt={country[0].flags.alt}
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
          <div className="space-y-7 sm:space-y-16">
            <h1 className="text-3xl mt-12 sm:mt-0 font-bold tracking-tight">
              {country[0].name.common}
            </h1>

            <article className="sm:flex sm:justify-between space-y-8 sm:space-y-0 dark:text-gray-300">
              <div className="space-y-2">
                <ul className="flex text-sm">
                  <label className="mr-2 font-semibold whitespace-nowrap">
                    Native Names:
                  </label>
                  <span className="dark:text-gray-400">
                    {nativeNames[firstLanguageCode]?.common}
                  </span>
                </ul>
                <p className="pointer-events-none block text-sm">
                  <label className="mr-2 font-semibold">Population:</label>
                  <span className="dark:text-gray-400">
                    {country[0].population}
                  </span>
                </p>
                <p className="pointer-events-none block text-sm">
                  <label className="mr-2 font-semibold">Region:</label>
                  <span className="dark:text-gray-400">
                    {country[0].region}
                  </span>
                </p>
                <p className="pointer-events-none block text-sm">
                  <label className="mr-2 font-semibold">Sub Region:</label>
                  <span className="dark:text-gray-400">
                    {country[0].subregion}
                  </span>
                </p>
                <p className="pointer-events-none block text-sm">
                  <label className="mr-2 font-semibold">Capital:</label>{" "}
                  <span className="dark:text-gray-400">
                    {country[0].capital}
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="pointer-events-none block text-sm">
                  <label className="mr-2 font-semibold">
                    Top Level Domain:
                  </label>
                  <span className="dark:text-gray-400">{country[0].tld}</span>
                </p>
                <ul className="flex text-sm">
                  <label className="mr-2 font-semibold">Currencies:</label>
                  <li className="ml-1 dark:text-gray-400">
                    {Object.entries(country[0].currencies)
                      .map(([key, currency]) => currency.name)
                      .join(", ")}
                  </li>
                </ul>
                <ul className="flex text-sm">
                  <label className="mr-2 font-semibold">Languages:</label>
                  <li className="ml-1 dark:text-gray-400">
                    {Object.entries(country[0].languages)
                      .map(([key, language]) => language)
                      .join(", ")}
                  </li>
                </ul>
              </div>
            </article>
            {country[0].borders.length > 0 && (
              <ul className="sm:flex sm:items-center pt-5 sm:pt-0 text-sm">
                <label className="mr-2 font-semibold whitespace-nowrap dark:text-gray-300">
                  Border Countries:
                </label>
                <div className="flex flex-wrap mt-2 sm:mt-0 max-w-full">
                  {country[0].borders.map((borderCountry, index) => (
                    <li
                      key={index}
                      className="mr-1 mt-1 text-sm py-1 dark:text-gray-400 dark:bg-gray-700/35 border-1 shadow-md px-4"
                    >
                      {borderCountry}
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
