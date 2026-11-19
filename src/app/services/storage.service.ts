import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StorageService {

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T {
    const rawValue: string | null = localStorage.getItem(key);
    return JSON.parse(rawValue ?? 'null');
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

}
