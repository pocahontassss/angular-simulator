import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  set<T>(key:string, value: T):void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get<T>(key: string):T | null {
   const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null
  }

  remove(key:string): void {
    localStorage.removeItem (key);
  }

  clean():void {
    localStorage.clear();
  }
}
