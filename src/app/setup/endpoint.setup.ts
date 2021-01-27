import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export type Handler<T> = (request: FastifyRequest<T>, reply: FastifyReply) => Promise<void>;
export type Install = (server: FastifyInstance) => void;
export interface Endpoint<T> {
  handler: Handler<T>;
  install: Install;
}
