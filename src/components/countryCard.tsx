import type { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-3 p-6">
        <h2 className="text-lg font-extrabold text-gray-900">{country.name}</h2>

        <div className="space-y-1.5 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold text-gray-900">Region:</span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-semibold text-gray-900">Capital:</span>{" "}
            {country.capital || "N/A"}
          </p>
        </div>
      </div>
    </article>
  );
};
