import axios, { AxiosError } from 'axios';
import { Planet } from './dtos/planet.dto.swapi';
import { Integration } from './query-planets-by-page.types';

interface ResponsePayload {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

export const queryPlanetsByPageItegration: Integration = async ({ page }) => {
  const url = `https://swapi.dev/api/planets/?page=${page}`;

  const { data } = await axios
    .get<ResponsePayload>(url, { timeout: 25000 })
    .catch((e: AxiosError<{ details: string }>) => {
      if (e.response?.status === 404) {
        return Promise.resolve<{ data: ResponsePayload }>({
          data: {
            count: 0,
            next: null,
            previous: null,
            results: [],
          },
        });
      }
      throw e;
    });

  return { hasNext: !!data.next, planets: data.results };
};
