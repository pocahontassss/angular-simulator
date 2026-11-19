import { MessageType } from '../../enums/message-type';

export interface IMessage {
  id: number;
  text: string;
  type: MessageType;
}
