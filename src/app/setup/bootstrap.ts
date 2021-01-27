import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { installServices } from "./services";

const server: FastifyInstance = Fastify({});

installServices(server);

server.listen(3000, () => {
  console.info("Server subiu...");
});
