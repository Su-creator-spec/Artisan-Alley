// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = 'mongodb://localhost:27017' ;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("mangoes"); // You can specify the db name: client.db("artisanAlley");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
