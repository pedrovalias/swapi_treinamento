import { Endpoint, Handler, Install } from '../setup';
import { mapClimatesFromString } from '../usecases/mappers/climate.mapper';
import { queryPlanetsByParamsUsecase } from '../usecases/query-planets-by-params.usercase';
import { EndpointRequest } from './query-planets-by-params.types';

const handler: Handler<EndpointRequest> = async (request, reply) => {
  const { name, climate } = request.query;

  const planets = await queryPlanetsByParamsUsecase({ name, climate: mapClimatesFromString(climate) });

  reply.status(200).send(planets);
};

const install: Install = (server) => {
  server.get('/planets', handler);
};

export const queryPlanetsByParamsController: Endpoint<EndpointRequest> = {
  install,
  handler,
};
