import { findPlanetByIdIntegration } from '../repositories/integrations/find-planet-by-id.integration.swapi';
import { Usecase } from './find-planet-by-id.types';
import { mapPlanetFromIntegration } from './mappers/planet.mapper';

export const findPlanetByIdUsecase: Usecase = async ({ id }) => {
  const planet = await findPlanetByIdIntegration({ id });

  if (planet) {
    return mapPlanetFromIntegration(planet);
  }

  return null;
};
