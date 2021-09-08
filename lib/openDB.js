import { MongoClient } from 'mongodb';

const MONGO_URI='mongodb+srv://trimin:WZbQxz5n7cmFBiv@cluster0.vf3bu.mongodb.net/trimin?retryWrites=true&w=majority'

export async function openDB() {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (await client.connect());

  return client.db('trimin');
}