import Countries from "./components/homepage/Countries";
import { fetchCountries } from "./actions/fetch-countries";

export default async function Home() {
  const countries = await fetchCountries();

  return (
    <>
      <section className="max-w-7xl container mx-auto px-4 sm:px-2 min-h-screen">
        <Countries countries={countries} />
      </section>
    </>
  );
}
