import { start } from './setup';

const startTime = Date.now();
start().then(() => console.info(`O servidor subiu em ${Date.now() - startTime} segundos`));
