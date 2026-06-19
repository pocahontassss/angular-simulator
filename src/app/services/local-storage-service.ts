import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  public setValue<T>(key: string, value: T): void {
    
    const stringifyValue = JSON.stringify(value)
    
    localStorage.setItem(key, stringifyValue);
  }
  
  public getValue<T>(key: string): T | null{
    
    const rawData = localStorage.getItem(key);
    
    if (!rawData) {
      return null;
    }
    
    return JSON.parse(rawData) as T;
    
  }
  
  public removeValue(key: string): void {
    localStorage.removeItem(key);
  }
  
  public removeAll(): void {
    localStorage.clear();
  }
}
