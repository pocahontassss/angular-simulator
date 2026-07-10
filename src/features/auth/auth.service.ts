import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { IToken, IAuthUser, IAuthResponse, ILogin} from './interfaces/index';
import { LocalStorageService } from '../../service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = 'https://dummyjson.com';
  private localStorageService: LocalStorageService = inject(LocalStorageService);


  private userSubject: BehaviorSubject<IAuthUser | null> = new BehaviorSubject<IAuthUser | null>(null);
  user$: Observable<IAuthUser | null> = this.userSubject.asObservable();

  login(data: ILogin): Observable<boolean> {
    return this.http.post<IAuthResponse>(
      `${ this.apiUrl }/auth/login`,
       data,
       { withCredentials: true },
    ).pipe(
      tap((res: IAuthResponse) => {
        const tokens: IToken = {
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        };
        this.saveTokens(tokens);
      }),
      switchMap(() => this.initAuth())
    );
  }

  initAuth(): Observable<boolean> {
    const token: string | null = this.getAccessToken();

    if (!token) {
      this.userSubject.next(null);
      return of(false);
    }

    return this.http.get<IAuthUser>(`${ this.apiUrl }/auth/me`, { withCredentials: true })
      .pipe(
        tap((user: IAuthUser) => this.userSubject.next(user)),
        map(() => true),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }

  refreshToken(refreshToken: string): Observable<IToken> {
    return this.http.post<IToken>(
      `${ this.apiUrl }/auth/refresh`,
      { refreshToken },
      { withCredentials: true },
    ).pipe(
        tap((res: IToken) => {
          const tokens: IToken = {
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          };
        this.saveTokens(tokens);
        })
      );
  }

  logout(): void {
    this.localStorageService.deleteKey('tokens');
    this.userSubject.next(null);
  }

  getAccessToken(): string | null {
    return this.getToken('accessToken');
  }

  getRefreshToken(): string | null {
    return this.getToken('refreshToken');
  }

  getToken(key: keyof IToken): string | null {
    const tokens: IToken | null = this.getTokens();
    return tokens?.[key] ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  private saveTokens(tokens: IToken): void {
    this.localStorageService.saveData('tokens', tokens);;
  }

  private getTokens(): IToken | null {
    return this.localStorageService.getItem<IToken>('tokens');
  }

}