import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value === null ? null : (JSON.parse(value) as T);
  }

  removeItemByKey(key: string): void {
    localStorage.removeItem(key);
  }

  removeAllItems(): void {
    localStorage.clear();
  }
}
