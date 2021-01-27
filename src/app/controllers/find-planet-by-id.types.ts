import { Planet } from "./dtos/planet.dto";

export interface RequestPath {
    id: string;
}

export interface EndpointRequest {
    Params: RequestPath;
}

export type ResponseBody = Planet;

export interface EndpointResponse {
    Body: ResponseBody;
}