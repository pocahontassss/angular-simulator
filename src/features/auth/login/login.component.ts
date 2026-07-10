import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  toastService: ToastService = inject(ToastService)

  form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  onSubmit(): void {
    this.authService.login(this.form.value)
      .pipe(
        tap(() => {
          this.router.navigate(['/']);
        }),
        catchError(() => {
          this.toastService.showError('Произошла ошибка доступа.');
          return of(null);
        })
      ).subscribe();
  }

}