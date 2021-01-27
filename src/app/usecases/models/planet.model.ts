import { Climate } from './climate.model';

export interface Planet {
  climate: Climate[];
  created: Date;
  diameter: number; // 0 quando for desconhecido
  edited: Date;
  name: string;
  population: number; // 0 quando for desconhecido
  id: string;
}
