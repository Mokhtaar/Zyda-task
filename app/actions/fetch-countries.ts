"use server";
import axios from "axios";
import { Country, CountryDetails } from "../types";

const baseUrl = `https://restcountries.com/v3.1`;

export const fetchCountries = async () => {
  try {
    const response = await axios.get<Country[]>(
      `${baseUrl}/all?fields=name,flags,population,region,capital`
    );
    const sortedCountries = response.data.sort((a, b) =>
      a.name.official.toLowerCase() < b.name.official.toLowerCase()
        ? -1
        : a.name.official.toLowerCase() > b.name.official.toLowerCase()
        ? 1
        : 0
    );

    return sortedCountries;
  } catch (error) {
    throw error;
  }
};

export const fetchCountryByName = async (name: string) => {
  try {
    const response = await axios.get<CountryDetails[]>(
      `${baseUrl}/name/${name}?fields=name,flags,population,region,capital,subregion,languages,borders,currencies,capital,tld`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
