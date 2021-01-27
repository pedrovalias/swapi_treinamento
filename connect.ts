import { Planet } from './src/app/repositories/stores/dtos/planet.dto';
import { connectionProvider } from './src/app/setup';

// savePlanetsStore({ planets: [] })
//   .then(() => console.info('ok'))
//   .catch(() => console.error('nok'));

const findAll = async () => {
  const connection = connectionProvider.getInstance().get();
  await connection.connect();

  const database = connection.db('starwars');
  const collection = database.collection('planets');

  const result = await collection.find({}).toArray();

  console.log('Planets:', result);
};

const savePlanets = async (planets: Planet[]) => {
  const connection = connectionProvider.getInstance().get();
  await connection.connect();

  const database = connection.db('starwars');
  const collection = database.collection('planets');

  const result = await collection.insertMany(planets);

  console.log('Planets:', result);
};

// savePlanets([
//   {
//     climate: ['tropical'],
//     created: new Date(),
//     edited: new Date(),
//     diameter: 150,
//     id: '29',
//     name: 'Test name2',
//     population: 99,
//   },
//   {
//     climate: ['rocky'],
//     created: new Date(),
//     edited: new Date(),
//     diameter: 90,
//     id: '13',
//     name: 'Test name3',
//     population: 99,
//   },
// ]).then(() => console.info('Persistiu o planeta na base'));

findAll().then(() => console.info('Listou todos os planetas que tinha na base'));
