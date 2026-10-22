import { Header } from "./components/header";
import { Search } from "./components/search";
import { Filter } from "./components/filter";
import { Countries } from "./pages/Countries";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-between gap-8 px-17 py-6 sm:flex-row sm:items-center">
        <Search />
        <Filter />
      </div>
      <Countries />
    </>
  );
}

export default App;
