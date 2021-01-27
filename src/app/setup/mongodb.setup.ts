import { MongoClient } from 'mongodb';
import { Factory, Supplier } from './utils.setup';

interface Configuration {
  connectionString: string;
}

export class ConnectionProvider implements Factory<MongoClient> {
  private client?: MongoClient;

  constructor(private configuration: Configuration) {}

  getInstance(): Supplier<MongoClient> {
    if (this.client !== undefined) {
      const cached = this.client;
      return { get: () => cached };
    }

    const client = new MongoClient(this.configuration.connectionString);
    return { get: () => client };
  }
}

export const connectionProvider = new ConnectionProvider({
  connectionString: 'mongodb://root:MongoDByduqs!@127.0.0.1:27017/?poolSize=20&writeConcern=majority',
});
