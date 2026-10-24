import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../api/countries";
import { CountryCard } from "../components/countryCard";
import { CountryDetail } from "../pages/CountryDetail";
import { Search } from "../components/search";
import { Filter } from "../components/filter";
import type { Country } from "../types/country";

export function Countries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p>Loading countries...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  if (selectedCountry) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12 dark:bg-[hsl(207,26%,17%)]">
        <CountryDetail
          country={selectedCountry}
          onBack={() => setSelectedCountry(null)}
        />
      </main>
    );
  }

  const filteredCountries = data.filter((country) => {
    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;

    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim());

    return matchesRegion && matchesSearch;
  });

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900 dark:bg-[hsl(207,26%,17%)] dark:text-[hsl(0,100%,100%)]">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <Search onChange={setSearchQuery} />{" "}
        <Filter
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
      </div>
      <div className="bg-[hsl(0,0%,99%)] text-gray-900 dark:bg-[hsl(207,26%,17%)] dark:text-white grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            country={country}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>
    </main>
  );
}
