import axios, { AxiosError } from 'axios';
import { Planet } from './dtos/planet.dto.swapi';
import { Integration } from './find-planet-by-id.types';

export const findPlanetByIdIntegration: Integration = async ({ id }) => {
  const url = `https://swapi.dev/api/planets/${id}/`;

  const { data } = await axios
    .get<Planet>(url, { timeout: 25000 })
    .catch((e: AxiosError<{ details: string }>) => {
      if (e.response?.status === 404) {
        return Promise.resolve<{ data: Planet | null }>({ data: null });
      }
      throw e;
    });

  return data;
};
