import { MessageService } from './message.service';
import { MessageType } from '../models/message';

describe('MessageService', () => {
  let service: MessageService;
  beforeEach(() => { vi.useFakeTimers(); service = new MessageService(); });
  afterEach(() => { service.ngOnDestroy(); vi.useRealTimers(); });

  it('adds unique messages newest first and removes each after five seconds', () => {
    service.addMessage('first', MessageType.Info);
    vi.advanceTimersByTime(1000);
    service.addMessage('second', MessageType.Success);
    expect(service.messages.map((message) => message.text)).toEqual(['second', 'first']);
    expect(new Set(service.messages.map((message) => message.id)).size).toBe(2);
    vi.advanceTimersByTime(4000);
    expect(service.messages.map((message) => message.text)).toEqual(['second']);
    vi.advanceTimersByTime(1000);
    expect(service.messages).toEqual([]);
  });

  it('closes a message immediately and cancels its timer', () => {
    service.addMessage('close me', MessageType.Warning);
    service.closeMessage(service.messages[0].id);
    expect(service.messages).toEqual([]);
    expect(vi.getTimerCount()).toBe(0);
  });
});
