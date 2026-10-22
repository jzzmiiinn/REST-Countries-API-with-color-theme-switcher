import type { Country } from "../types/country";
import countriesData from "../../data.json";

export const fetchCountries = async (): Promise<Country[]> => {
  return countriesData as Country[];
};
