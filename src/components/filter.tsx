interface FilterProps {}

export const Filter = () => {
  return (
    <div className="mb-10">
      <select
        className="w-full max-w-52 rounded-md bg-white px-5 py-4 text-sm text-gray-800 shadow-md outline-none focus:ring-2 focus:ring-gray-300"
        defaultValue=""
      >
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
