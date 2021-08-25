import { config } from 'dotenv';
import express from 'express';
import socketIO from 'socket.io';
import redisClient from './conf/redis';
import connectRedis from 'connect-redis';
import { initialize, session as passportSession } from 'passport';
import session from 'express-session';
import { Server } from 'http';
import { startChat } from './socket-io-endpoints';
import cors from 'cors';
config();
const app = express();
const httpServer = new Server(app);
const io = new socketIO.Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-company'],
		credentials: true,
	},
});
startChat(io, app);

//set port and ip
app.set('trust proxy', true);
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '127.0.0.1');
app.use(cors());

const RedisStore = connectRedis(session);

// initialize cart
app.use(
    session({
        secret: process.env.SECRET as string,
        store: new RedisStore({client: redisClient}),
        resave: false,
        saveUninitialized: false,
        proxy: true,
    }),
);
// Initialize express app and it's dependencies
app.use(initialize());
app.use(passportSession());


app.get('/', (req, res) => {
	return res.send('Hello world');
});

httpServer.listen(app.get('port'), app.get('ip'), () => {
	console.log(`Server listening on port ${app.get('port')}.`);
});
