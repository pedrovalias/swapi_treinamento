import { queryPlanetsByPageItegration } from '../repositories/integrations/query-planets-by-page.integration.swapi';
import { mapPlanetFromIntegration } from './mappers/planet.mapper';
import { Planet } from './models/planet.model';
import { Input, Usecase } from './query-planets-by-params.types';

const queryPersistedPlanets = () => {};
const persistPlanets = () => {};

const queryPlanetsFromIntegration = (input: { filters: Input }): Planet[] => {
  return [];
};

const filterPlanets = ({ planets, filters: { climate, name } }: { planets: Planet[]; filters: Input }): Planet[] => {
  let result: Planet[] = [];
  // filtrar por nome e/ou climate
  if (climate) {
    result = result.filter((planet) => {
      // return planet.climate.includes(climate);
      for (const c of climate) {
        if (planet.climate.includes(c)) {
          return true;
        }
      }
      return false;
    });
  }
  return result;
};

export const queryPlanetsByParamsUsecase: Usecase = async ({ name, climate }) => {
  let continueQuerying = true;
  let page = 1;
  let result: Planet[] = [];
  while (continueQuerying) {
    const { planets, hasNext } = await queryPlanetsByPageItegration({ page });
    continueQuerying = hasNext;
    page++;
    result = [...result, ...planets.map((planet) => mapPlanetFromIntegration(planet))];
  }

  result = filterPlanets({ planets: result, filters: { name, climate } });
  return result;
};
