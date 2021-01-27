import { Planet } from './dtos/planet.dto';

export interface Input {
  planets: Planet[];
}

export type Store = (input: Input) => Promise<void>;
