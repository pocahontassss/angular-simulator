import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/users';

  private http: HttpClient = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL);
  }
}
