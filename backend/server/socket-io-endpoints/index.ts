import { IMessage } from '../../../@types/tagnames';
import { Express } from 'express';
import { Message } from '../models/Message';
import { Server, Socket } from 'socket.io';

export const startChat = (io: Server, app: Express) => {
	io.on('connection', (socket: Socket) => {
		const message = new Message({ text: `Welcome to geniobot.io`, uname: `GenioBot` });
		socket.emit('add-message', message); // emit an event to the socket
		io.emit('broadcast' /* … */); // emit an event to all connected sockets
		socket.on('reply', () => {
			/* … */
		}); // listen to the event
		socket.on('new-message', (data: IMessage) => {
			const message = new Message(data);
			socket.emit('add-message', message); // emit an event to the socket
			socket.broadcast.emit('broadcast', /* … */ message); // emit an event to all connected sockets, except sender
			socket.on('reply', () => {
				/* … */
			}); // listen to the event
		});
	});
};
