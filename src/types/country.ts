export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

export interface Country {
  nativeName: string;
  name: string;
  alpha3Code: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  currencies: Currency[];
  languages: Language[];
}
