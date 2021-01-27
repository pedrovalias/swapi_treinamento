import { FastifyReply, FastifyRequest } from 'fastify';
import { Climate } from '../usecases/models/climate.model';
import { Planet } from '../usecases/models/planet.model';
import { queryPlanetsByParamsUsecase } from '../usecases/query-planets-by-params.usercase';
import { queryPlanetsByParamsController } from './query-planets-by-params.controller';
import { EndpointRequest } from './query-planets-by-params.types';

jest.mock('../usecases/query-planets-by-params.usercase');

describe('Unit tests for queryPlanetsByParamsController', () => {
  test('Retorna corretamente o planeta quando informado climate e name', async () => {
    const now = new Date();
    const planets: Planet[] = [
      {
        climate: [Climate.ARID],
        created: now,
        edited: now,
        diameter: 40,
        id: '19',
        name: 'Test name',
        population: 99,
      },
      {
        climate: [Climate.ARID],
        created: now,
        edited: now,
        diameter: 25,
        id: '20',
        name: 'Test name 1',
        population: 999,
      },
    ];

    const request: Partial<FastifyRequest<EndpointRequest>> = {
      query: { climate: 'arid' },
    };

    const send = jest.fn().mockImplementation((any: any) => {});
    const header = jest.fn().mockImplementation((any: any) => ({ send }));
    const status = jest.fn().mockImplementation((any: any) => ({ header, send }));
    const reply: Partial<FastifyReply> = {
      status: status,
      header: header,
      send: send,
    };

    (queryPlanetsByParamsUsecase as jest.Mock).mockResolvedValue(planets);

    await queryPlanetsByParamsController.handler(request as FastifyRequest<EndpointRequest>, reply as FastifyReply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(planets);
  });
});
