import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from '../../../classes/message.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private messageService: MessageService = inject(MessageService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);

  authForm: FormGroup = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.authForm.valid) {
      this.authService
        .login(this.authForm.value.login, this.authForm.value.password)
        .pipe(
          tap(() => {
            this.router.navigate(['']);
            this.messageService.showSuccess('успешно авторизовался');
            this.authService.authDateSubject.next(new Date());
          }),
          catchError((error: HttpErrorResponse) => {
            this.messageService.showError('Ошибка авторизации');
            return throwError(() => error);
          }),
        )
        .subscribe();
    }
  }
}
