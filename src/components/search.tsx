export const Search = () => {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-4 rounded-md bg-white px-6 py-4 shadow-md transition-shadow focus-within:ring-2 focus-within:ring-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          aria-label="Search for a country"
        />
      </div>
    </div>
  );
};
