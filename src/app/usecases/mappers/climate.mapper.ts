import { Climate } from '../models/climate.model';

export const mapClimatesFromString = (dto: string = ''): Climate[] => {
  const a: Climate[] = dto.split(',').map(
    (v): Climate => {
      const b = v.trim();
      switch (b) {
        case 'temperate':
          return Climate.TEMPERATE;
        case 'tropical':
          return Climate.TROPICAL;
        case 'arid':
          return Climate.ARID;
        case 'frozen':
          return Climate.FROZEN;
        case 'murky':
          return Climate.MURKY;
        case 'windy':
          return Climate.WINDY;
        case 'rocky':
          return Climate.ROCKY;
        default:
          return Climate.UNKNOWN;
      }
    },
  );
  return a;
};
