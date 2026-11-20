import { MessageType } from '../enums/message-type.enum';

export interface Message {
  id: number;
  title: string;
  text: string;
  type: MessageType;
}