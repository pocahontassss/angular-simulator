import { BehaviorSubject, catchError, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../../classes/local-storage.service';
import { inject, Injectable } from '@angular/core';
import { MessageService } from '../../classes/message.service';
import { IAuthResponse } from './IAuthResponse';
import { IAuthToken } from './IAuthToken';
import { IAuthUser } from './IAuthUser';
import { UserRole } from './UserRole';
import { Router } from '@angular/router';
import { AppConfig } from '../../interfaces/IAppConfig';
import { APP_CONFIG } from '../../config.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private messageService: MessageService = inject(MessageService);
  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);
  APP_CONFIG: AppConfig = inject(APP_CONFIG);

  authDateSubject: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null);
  authDate$: Observable<Date | null> = this.authDateSubject.asObservable();
  private authUserSubject: BehaviorSubject<IAuthUser | null> =
    new BehaviorSubject<IAuthUser | null>(null);
  authUser$: Observable<IAuthUser | null> = this.authUserSubject.asObservable();

  private apiUrl: string = 'https://dummyjson.com/auth';

  private readonly STORAGE_KEY: string = 'authTokens';

  private saveTokens(tokens: IAuthToken): void {
    this.localStorageService.setItem(this.STORAGE_KEY, tokens);
  }

  private removeTokens(): void {
    this.localStorageService.removeItem(this.STORAGE_KEY);
  }

  private getTokens(): IAuthToken | null {
    return this.localStorageService.getItem(this.STORAGE_KEY);
  }

  private fetchCurrentUser(): Observable<IAuthUser> {
    return this.http.get<IAuthUser>(`${ this.apiUrl }/me`).pipe(
      tap((response: IAuthUser) => {
        this.authUserSubject.next(response);
      }),
    );
  }

  private refreshAuth(): Observable<boolean> {
    return this.refreshToken().pipe(
      switchMap(() => this.fetchCurrentUser()),
      map(() => true),
      catchError(() => {
        this.logout();
        return of(false);
      }),
    );
  }

  checkAuth(): Observable<boolean> {
    const token: string | undefined = this.getAccessToken();

    if (!token) {
      return of(false);
    }

    return this.fetchCurrentUser().pipe(
      map(() => true),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.refreshAuth();
        }
        this.logout();
        return of(false);
      }),
    );
  }

  login(username: string, password: string): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${ this.apiUrl }/login`, {
        username,
        password,
        expiresInMins: this.APP_CONFIG.sessionTimeout,
      })
      .pipe(
        tap((response: IAuthResponse) => {
          const user: IAuthUser = { ...response, role: UserRole.ADMIN };
          this.saveTokens({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          });
          this.authUserSubject.next(user);
        }),
        catchError((error: HttpErrorResponse) => {
          this.messageService.showError('Неверные данные.');
          return throwError(() => error);
        }),
      );
  }

  refreshToken(): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${ this.apiUrl }/refresh`, {
        refreshToken: this.getRefreshToken(),
        expiresInMins: this.APP_CONFIG.sessionTimeout,
      })
      .pipe(
        tap((response: IAuthResponse) => {
          this.saveTokens({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          });
          this.authUserSubject.next(response);
        }),
        catchError((error: HttpErrorResponse) => {
          this.logout();
          this.messageService.showError('Неверные данные.');
          return throwError(() => error);
        }),
      );
  }

  logout(): void {
    this.removeTokens();
    this.authUserSubject.next(null);
    this.authDateSubject.next(null);
    this.redirectToLoginPage();
    this.messageService.showError('Сессия истекла. Пожалуйста, войдите снова.');
  }

  getAccessToken(): string | undefined {
    return this.getTokens()?.accessToken;
  }

  getRefreshToken(): string | undefined {
    return this.getTokens()?.refreshToken;
  }

  isLoggedIn(): boolean {
    return !!this.authUserSubject.value;
  }

  redirectToLoginPage(): void {
    this.router.navigate(['/auth']);
  }

  isAdmin(): boolean {
    return this.authUserSubject.value?.role === UserRole.ADMIN;
  }

}
