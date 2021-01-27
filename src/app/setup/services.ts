import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { findPlanetByIdController } from '../controllers/find-planet-by-id.controller';
import { queryPlanetsByParamsController } from '../controllers/query-planets-by-params.controller';

export type Handler<T> = (request: FastifyRequest<T>, reply: FastifyReply) => Promise<void>;
export type Install = (server: FastifyInstance) => void;
export interface Endpoint<T> {
  handler: Handler<T>;
  install: Install;
}

const services: Endpoint<any>[] = [findPlanetByIdController, queryPlanetsByParamsController];

export const installServices = (server: FastifyInstance): void => {
  services.forEach((endpoint) => {
    endpoint.install(server);
  });
};
