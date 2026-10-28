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
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 4;

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

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900 dark:bg-[hsl(207,26%,17%)] dark:text-[hsl(0,100%,100%)]">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <Search
          onChange={(value) => {
            setSearchQuery(value);
            setCurrentPage(1);
          }}
        />

        <Filter
          selectedRegion={selectedRegion}
          onRegionChange={(region) => {
            setSelectedRegion(region);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="bg-[hsl(0,0%,99%)] text-gray-900 dark:bg-[hsl(207,26%,17%)] dark:text-white grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentCountries.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            country={country}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>

      <div className="mt-10 flex w-full items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className="rounded-md bg-white px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gray-800 dark:text-white"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              Math.abs(page - currentPage) <= 1,
          )
          .map((page, index, pages) => (
            <span key={page} className="flex items-center gap-2">
              {index > 0 && pages[index - 1] !== page - 1 && (
                <span className="px-1 text-gray-500">...</span>
              )}

              <button
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm shadow-sm ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                }`}
              >
                {page}
              </button>
            </span>
          ))}

        <button
          type="button"
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="rounded-md bg-white px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-40 dark:bg-gray-800 dark:text-white"
        >
          Next
        </button>
      </div>
    </main>
  );
}
