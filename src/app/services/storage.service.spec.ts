import { StorageService } from './storage.service';

describe('StorageService', () => {
  const service = new StorageService();
  beforeEach(() => localStorage.clear());
  it('round trips structured values and removes one or all entries', () => {
    const value = { title: 'Tour', dates: [1, 2], active: true };
    service.setItem('tour', value);
    service.setItem('count', 3);
    expect(service.getItem<typeof value>('tour')).toEqual(value);
    service.removeItem('tour');
    expect(service.getItem('tour')).toBeNull();
    expect(service.getItem<number>('count')).toBe(3);
    service.clear();
    expect(service.getItem('count')).toBeNull();
  });
});
