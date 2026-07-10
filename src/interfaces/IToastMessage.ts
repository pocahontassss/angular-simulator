import { MessageType } from "../enums/MessageType";

export interface IToastMessage {
  id: string;
  text: string;
  type: MessageType;
}