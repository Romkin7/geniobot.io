import React, { useState, useEffect, FC } from 'react';
import Message from '../Message/Message';
import CategoriesList from '../Categories/CategoriesList';
import MessageForm from '../MessageForm/MessageForm';
import socketIOClient, { Socket } from 'socket.io-client';
import { IMessage } from '../../@types';
const ENDPOINT = 'http://127.0.0.1:8080';
let socket: Socket;

const Chat: FC = () => {
	const [messages, setMessages] = useState<IMessage[]>([{ text: '', uname: '' }]);

	useEffect(() => {
		socket = socketIOClient(ENDPOINT, {
			withCredentials: true,
			extraHeaders: {
				'my-company': 'halkoliiteri.com',
			},
		});
		socket?.on('add-message', (message: IMessage) => {
			setMessages((messages) => [...(messages as IMessage[]), message]);
		});
		socket?.on('broadcast', (message: IMessage) => {
			setMessages((messages) => [...(messages as IMessage[]), message]);
		});
		// CLEAN UP THE EFFECT
		return () => socket?.disconnect() as any;
	}, []);

	const addMessage = (text: string) => {
		socket?.emit('new-message', { text: text, uname: 'RomanT' });
	};
	const categories = [
		{ name: 'Mobile Subscriptions', id: 1, questions: [{ question: 'How much it costs?', answer: 'It depends on plan.', id: 1 }] },
		{ name: 'Wifi Subscriptions', id: 2, questions: [{ question: 'How much it costs?', answer: 'It depends on plan.', id: 1 }] },
	];
	return (
		<>
			<main className="geniobot--chat">
				<CategoriesList categories={categories} />
				<ul className="geniobot--chat__messages">
					{messages.length &&
						messages.map((message: IMessage) => {
							return <Message key={Date.now()} message={message} />;
						})}
				</ul>
			</main>
			<footer>
				<MessageForm setMessage={addMessage} />
			</footer>
		</>
	);
};

export default Chat;
