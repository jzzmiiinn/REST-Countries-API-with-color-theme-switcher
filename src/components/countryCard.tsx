import type { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

export const CountryCard = ({ country, onClick }: CountryCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="overflow-hidden rounded-lg bg-white text-gray-900 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-[hsl(209,23%,22%)] dark:text-white"
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-3 p-6">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-[hsl(0,100%,100%)]">
          {country.name}
        </h2>

        <div className="space-y-1.5 text-sm text-gray-700 dark:text-[hsl(0,100%,100%)]">
          <p>
            <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
              Population:
            </span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
              Region:
            </span>{" "}
            {country.region}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
              Capital:
            </span>{" "}
            {country.capital || "N/A"}
          </p>
        </div>
      </div>
    </button>
  );
};
