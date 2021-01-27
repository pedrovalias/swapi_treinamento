import { Planet } from './dtos/planet.dto';

export interface RequestQuery {
  climate?: string;
  name?: string;
}

export interface EndpointRequest {
  Querystring: RequestQuery;
}

export type ResponseBody = Planet[];

export interface EndpointResponse {
  Body: ResponseBody;
}
