interface FilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export const Filter = ({ selectedRegion, onRegionChange }: FilterProps) => {
  return (
    <div className="mb-10">
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="w-full max-w-52 rounded-md bg-white px-5 py-4 text-sm text-gray-800 shadow-md outline-none focus:ring-2 focus:ring-gray-300  dark:bg-[hsl(209,23%,22%)] dark:text-[hsl(0,100%,100%)]"
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
