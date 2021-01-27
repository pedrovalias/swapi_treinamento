import { connectionProvider } from '../../setup';
import { Store } from './save-planets.types';

export const savePlanetsStore: Store = async ({ planets }) => {
  const provider = connectionProvider.getInstance();

  const connection = provider.get();

  await connection.connect();
  const database = connection.db('starwars');
  const collection = database.collection('planets');

  await collection.insertMany(planets);
};
