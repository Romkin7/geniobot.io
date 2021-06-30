import { Pool, Client } from 'pg';
import { config } from 'dotenv';
import { IConnectionSettings } from '../@types';
config();
const connectionSettings: IConnectionSettings = {
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	port: Number(process.env.CLOUD_PORT),
	host: process.env.CLOUD_HOST,
	database: process.env.DATABASE,
};
export function createPoolConnection() {
	const pool = new Pool(connectionSettings);
	return pool;
}

export async function createClienConnection() {
	const client: Client = new Client(connectionSettings);
	await client.connect();
	return client;
}
