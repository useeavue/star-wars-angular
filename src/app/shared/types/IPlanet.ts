export interface IPlanet {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: string[];
  url: string;
}

export interface IPlanetResponse extends IPlanet {
  rotation_period: string;
  orbital_period: string;
}
