import type { Country } from "../types/country";

interface CountryDetailProps {
  country: Country;
  onBack: () => void;
}

export const CountryDetail = ({ country, onBack }: CountryDetailProps) => {
  return (
    <div className="px-2 py-8 sm:px-6  dark:bg-[hsl(207,26%,17%)]">
      <button
        type="button"
        onClick={onBack}
        className="mb-12 inline-flex items-center gap-2 rounded-md bg-white px-8 py-2.5 text-sm text-gray-800 shadow-md transition hover:shadow-lg dark:bg-[hsl(209,23%,22%)] dark:text-[hsl(0,100%,100%)]"
      >
        ← Back
      </button>

      <main className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name}`}
          className="w-full max-w-xl object-contain md:max-w-none"
        />

        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-[hsl(0,100%,100%)] sm:text-3xl">
            {country.name}
          </h2>

          <div className="grid grid-cols-1 gap-8 text-sm text-gray-700 dark:text-[hsl(0,100%,100%)] sm:grid-cols-2">
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Native name:{" "}
                </span>
                {country.nativeName || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Population:{" "}
                </span>
                {country.population.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Region:{" "}
                </span>
                {country.region}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Sub region:{" "}
                </span>
                {country.subregion || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Capital:{" "}
                </span>
                {country.capital || "N/A"}
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Top Level Domain:{" "}
                </span>
                {country.topLevelDomain?.join(", ") || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Currencies:{" "}
                </span>
                {country.currencies
                  .map((currency) => currency.name)
                  .join(", ") || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-[hsl(0,100%,100%)]">
                  Languages:{" "}
                </span>
                {country.languages
                  .map((language) => language.name)
                  .join(", ") || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
