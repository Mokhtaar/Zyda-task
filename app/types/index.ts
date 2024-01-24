import { Dispatch, SetStateAction } from "react";

export interface Country {
  capital: string[];
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
}

export interface CountryDetails extends Country {
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  subregion: string;
  languages: { [key: string]: string };
  borders: string[];
}

export interface CountryDetailsProps {
  country: CountryDetails[];
}

export interface CountriesProps {
  countries: Country[];
}

export interface LoadMoreProps extends CountriesProps {
  setDisplayedCountries: Dispatch<SetStateAction<Country[]>>;
  searchKeyword: string;
  setCountriesToSearch: Dispatch<SetStateAction<Country[]>>;
  dropdownOption: string;
}

export interface DropdownProps {
  setDisplayedCountries: Dispatch<SetStateAction<Country[]>>;
  setDropdownOption: Dispatch<SetStateAction<string>>;
  dropdownOption: string;
  countriesToSearch: Country[];
}

export interface FiltersProps extends DropdownProps {
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}
