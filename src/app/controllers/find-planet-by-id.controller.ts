import { Endpoint, Handler, Install } from '../setup';
import { findPlanetByIdUsecase } from '../usecases/find-planet-by-id.usecase';
import { EndpointRequest } from './find-planet-by-id.types';

const handler: Handler<EndpointRequest> = async (request, reply) => {
  const id = request.params.id;

  const planet = await findPlanetByIdUsecase({ id });

  if (planet) {
    reply.status(200).header('x-request-id', 'valorFake').send(planet);
    return;
  }
  reply.status(404).header('x-request-id', 'valorFake').send({ message: 'Planet not found' });
};

const install: Install = (server) => {
  server.get('/planets/:id', handler);
};

export const findPlanetByIdController: Endpoint<EndpointRequest> = {
  install,
  handler,
};
