import {createClient} from 'redis';

//Configure redis client
const redisClient = createClient({
	host: process.env.REDIS_HOST,
	port: Number(process.env.REDIS_PORT),
	retry_strategy: () => 1000,
});

redisClient.on('error', function (err) {
	console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
	console.log('Connected to redis successfully');
});

export default redisClient;
