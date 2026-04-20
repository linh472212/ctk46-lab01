export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string; // Mã quốc gia 3 chữ cái (Dùng làm ID cho URL)
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
}