import { Climate } from "./climate.dto";

export interface Planet {
    climate: Climate[];
    created: Date;
    diameter: number;
    edited: Date;
    name: string;
    population: number;
    id: string;
}