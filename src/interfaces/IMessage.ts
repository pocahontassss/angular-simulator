import { MessageType } from '../enums/MessageType';

export interface IMessage {
  id: number;
  text: string;
  type: MessageType;
}