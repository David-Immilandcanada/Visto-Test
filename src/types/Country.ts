export interface Country {
    alpha3Code: string;
    name: string;
    officialName: string;
    nativeName: string;
    currencies: { name: string }[];
    capital: string;
    region: string;
    borders: string[];
    population: number;
    latlng: [number, number];
    postalCodeFormat: string;
}