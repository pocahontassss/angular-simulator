import { MessageType } from '../enums/MessageType';

export interface IMessage { 
  id: number;
  message: string;
  type: MessageType;
}
