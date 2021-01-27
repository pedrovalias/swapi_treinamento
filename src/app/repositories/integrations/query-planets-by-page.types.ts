import { Planet } from './dtos/planet.dto.swapi';

export interface Input {
  page: number;
}

export interface Output {
  hasNext: boolean;
  planets: Planet[];
}

export type Integration = (input: Input) => Promise<Output>;
