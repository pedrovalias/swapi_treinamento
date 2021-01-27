import { FastifyReply, FastifyRequest } from 'fastify';
import { findPlanetByIdUsecase } from '../usecases/find-planet-by-id.usecase';
import { Climate } from '../usecases/models/climate.model';
import { Planet } from '../usecases/models/planet.model';
import { findPlanetByIdController } from './find-planet-by-id.controller';
import { EndpointRequest } from './find-planet-by-id.types';

jest.mock('../usecases/find-planet-by-id.usecase');

describe('Unit tests for findPlanetByIdController', () => {
  test('Retorna corretamente o planeta quando o planeta existe', async () => {
    // fixture = cenário
    const now = new Date();
    const planet: Planet = {
      climate: [Climate.ARID],
      created: now,
      edited: now,
      diameter: 25,
      id: '19',
      name: 'Test name',
      population: 99,
    };

    // setup da fixture = ajuste dos mocks/stubs/spies
    const request: Partial<FastifyRequest<EndpointRequest>> = {
      params: { id: 'testId' },
    };

    const send = jest.fn().mockImplementation((any: any) => {});
    const header = jest.fn().mockImplementation((any: any) => ({ send }));
    const status = jest.fn().mockImplementation((any: any) => ({ header }));
    const reply: Partial<FastifyReply> = {
      status: status,
      header: header,
      send: send,
    };
    (findPlanetByIdUsecase as jest.Mock).mockResolvedValue(planet);

    // execução
    await findPlanetByIdController.handler(request as FastifyRequest<EndpointRequest>, reply as FastifyReply);

    // validações
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith({
      climate: [Climate.ARID],
      created: now,
      edited: now,
      diameter: 25,
      id: '19',
      name: 'Test name',
      population: 99,
    });
  });

  test('Retorna que o planeta não foi encontrado quando o planeta não existe', async () => {
    // fixture = cenário
    const now = new Date();
    const planet = null;

    // setup da fixture = ajuste dos mocks/stubs/spies
    const request: Partial<FastifyRequest<EndpointRequest>> = {
      params: { id: 'testId' },
    };
    const send = jest.fn().mockImplementation((any: any) => {});
    const header = jest.fn().mockImplementation((any: any) => ({ send }));
    const status = jest.fn().mockImplementation((any: any) => ({ header }));
    const reply: Partial<FastifyReply> = {
      status: status,
      header: header,
      send: send,
    };
    (findPlanetByIdUsecase as jest.Mock).mockResolvedValue(planet);

    // execução
    await findPlanetByIdController.handler(request as FastifyRequest<EndpointRequest>, reply as FastifyReply);

    // validações
    expect(reply.status).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith({ message: 'Planet not found' });
  });
});
