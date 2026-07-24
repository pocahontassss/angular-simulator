import { MessageType } from "../../enums/MessagesType";

export interface Message {
  id: number;
  text: string;
  type: MessageType;
}