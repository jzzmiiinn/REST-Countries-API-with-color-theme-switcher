import { useState } from "react";
import { CountryCard } from "../components/countryCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../api/countries";

export function Countries() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) {
    return (
      <p className="px-6 py-12 text-center text-gray-600">
        Loading countries...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="px-6 py-12 text-center text-red-600">
        Error: {error.message}
      </p>
    );
  }

  const filteredCountries =
    selectedRegion === "All"
      ? data
      : data.filter((country) => country.region === selectedRegion);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </main>
  );
}
