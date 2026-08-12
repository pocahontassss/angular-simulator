import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const item: string | null = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearItem(): void {
    localStorage.clear();
  }

}
