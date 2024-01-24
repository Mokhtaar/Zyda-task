import {
  fetchCountries,
  fetchCountryByName,
} from "@/app/actions/fetch-countries";
import CountryDetails from "@/app/components/country-details/CountryDetails";
import { Country } from "@/app/types";

export default async function CountryInfo({
  params,
}: {
  params: { name: string };
}) {
  const country = await fetchCountryByName(params.name);

  return <CountryDetails country={country} />;
}

export async function generateStaticParams() {
  const countries = await fetchCountries();

  return countries.map((country: Country) => ({
    name: country.name.common,
  }));
}
