import { Planet } from './dtos/planet.dto';

export interface Input {
  id: string;
}

export type Output = Planet | null;

export type Store = (input: Input) => Promise<Output>;
