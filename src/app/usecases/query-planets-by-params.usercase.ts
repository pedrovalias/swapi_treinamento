import { queryPlanetsByPageItegration } from '../repositories/integrations/query-planets-by-page.integration.swapi';
import { savePlanetsStore } from '../repositories/stores/save-planets.store.mongo';
import { isEnabled } from '../setup';
import { mapPlanetFromIntegration } from './mappers/planet.mapper';
import { Planet } from './models/planet.model';
import { Input, Usecase } from './query-planets-by-params.types';

const queryPersistedPlanets = async (): Promise<Planet[]> => {
  return [];
};

const persistPlanets = async ({ planets }: { planets: Planet[] }): Promise<void> => {
  await savePlanetsStore({ planets });
};

const queryPlanetsFromIntegration = async (): Promise<Planet[]> => {
  let continueQuerying = true;
  let page = 1;
  let result: Planet[] = [];
  while (continueQuerying) {
    const { planets, hasNext } = await queryPlanetsByPageItegration({ page });
    continueQuerying = hasNext;
    page++;
    result = [...result, ...planets.map((planet) => mapPlanetFromIntegration(planet))];
  }

  return result;
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
  if (isEnabled('estoriaB')) {
    const planets: Planet[] = await queryPlanetsFromIntegration();
    await persistPlanets({ planets: [...planets.map((p) => ({ ...p }))] });
    return planets;
  }
  let result: Planet[] = await queryPlanetsFromIntegration();
  result = filterPlanets({ planets: result, filters: { name, climate } });
  return result;
};
