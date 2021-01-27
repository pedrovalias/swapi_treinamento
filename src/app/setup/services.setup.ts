import { FastifyInstance } from 'fastify';
import { findPlanetByIdController } from '../controllers/find-planet-by-id.controller';
import { queryPlanetsByParamsController } from '../controllers/query-planets-by-params.controller';
import { Endpoint } from './endpoint.setup';

const services: Endpoint<any>[] = [findPlanetByIdController, queryPlanetsByParamsController];




export const installServices = (server: FastifyInstance): void => {
  services.forEach((endpoint) => {
    endpoint.install(server);
  });
};
