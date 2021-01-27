import { Planet } from './dtos/planet.dto.swapi';

export interface Input {
  id: string;
}

export type Integration = (input: Input) => Promise<Planet | null>;
