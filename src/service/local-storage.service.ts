import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  saveData<T>(key: string, data: T): void {
    if (data === undefined) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  deleteKey(key: string): void {
    localStorage.removeItem(key);
  }

  resetStorage(): void {
    localStorage.clear();
  }
  
}
