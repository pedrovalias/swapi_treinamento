import { Climate } from './models/climate.model';
import { Planet } from './models/planet.model';

export interface Input {
  name?: string;
  climate?: Climate[];
}

export type Output = Planet[];

export type Usecase = (input: Input) => Promise<Output>;
