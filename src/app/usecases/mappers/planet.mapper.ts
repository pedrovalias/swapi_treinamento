import { Planet as IntegrationPlanet } from '../../repositories/integrations/dtos/planet.dto.swapi';
import { isEnabled } from '../../setup/feature-flags';
import { Planet as ModelPlanet } from '../models/planet.model';
import { mapClimatesFromString } from './climate.mapper';

const resolvePopulationOrDiameter = (value: string | number): number => {
  if (isEnabled('estoriaA')) {
    return 1; // tasks para ajustar o código
  }
  return value as number;
};

const resolveId = (url: string): string => {
  if (isEnabled('estoriaA')) {
    return 'idTratado'; // tasks para ajustar o código
  }
  return url; // errado
};

export const mapPlanetFromIntegration = (dto: IntegrationPlanet): ModelPlanet => {
  const { climate, name, population, diameter, created, edited, url, ...fields } = dto;
  // console.info(`Todos os outros campos não mapeados do planeta com id ${id} => `, fields)
  return {
    climate: mapClimatesFromString(climate),
    name,
    population: resolvePopulationOrDiameter(population),
    diameter: resolvePopulationOrDiameter(diameter),
    created,
    edited,
    id: resolveId(url),
  };
};
