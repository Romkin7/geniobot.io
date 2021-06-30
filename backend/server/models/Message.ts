import { IMessage } from '../@types';

/**
 *
 * Message Class
 * Creates Message that is passed to the chat.
 *
 */

export class Message implements IMessage {
	uname: string | undefined;
	text: string | undefined;
	constructor(message: IMessage) {
		this.uname = message.uname || undefined;
		this.text = message.text || undefined;
	}
}
