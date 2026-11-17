export enum MessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export interface Message {
  readonly id: number;
  readonly text: string;
  readonly type: MessageType;
}
