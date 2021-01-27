import { connectionProvider } from '../../setup';
import { Planet } from './dtos/planet.dto';
import { Store } from './find-planet-by-id.types';

const findByIdPlanetStore: Store = async ({ id }) => {
  const connection = connectionProvider.getInstance().get();
  await connection.connect();

  const database = connection.db('starwars');
  const collection = database.collection('planets');

  const result = await collection.findOne<Planet>({
    _id: id,
  });

  console.log('Planet:', result);

  return result;
};
