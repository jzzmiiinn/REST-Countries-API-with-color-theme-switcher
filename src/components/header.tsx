export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-5 shadow-sm sm:px-10 lg:px-20">
      <h1 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-2xl">
        Where in the world?
      </h1>

      <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 sm:text-base">
        <span aria-hidden="true">☾</span>
        Dark Mode
      </button>
    </header>
  );
};
