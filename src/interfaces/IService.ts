import { MessageType } from "../enums/message-type.enum";

export interface IService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IMessage {
  id: number;
  text: string;
  type: MessageType;
}