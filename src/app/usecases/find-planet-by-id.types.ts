import { Planet } from "./models/planet.model";

export interface Input {
    id: string;
}

export type Output = Planet | null;

export type Usecase = (input: Input) => Promise<Output>;
