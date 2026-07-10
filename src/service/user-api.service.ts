import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  private http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

}