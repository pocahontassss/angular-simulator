import { MessageType } from './message-type.enum';

export interface Message {
  id: number;
  text: string;
  type: MessageType;
}