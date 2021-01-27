export interface PlanetV1 {
  climate: string; // ATENÇÃO: lista separada por virgula
  created: Date;
  diameter: number;
  edited: Date;
  name: string;
  population: number;
  url: string;
}

export interface PlanetV2 {
  climate: string; // ATENÇÃO: lista separada por virgula
  created: Date;
  diameter: string;
  edited: Date;
  name: string;
  population: string;
  url: string;
}

export type Planet = PlanetV1 | PlanetV2;
