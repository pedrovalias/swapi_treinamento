import Fastify, { FastifyInstance } from 'fastify';
import { installServices } from './services.setup';

export const start = async (): Promise<void> => {
  return new Promise<void>((resolve) => {
    const server: FastifyInstance = Fastify({});

    installServices(server);

    server.listen(3000, () => {
      console.info('Server subiu...');
      resolve();
    });
  });
};
