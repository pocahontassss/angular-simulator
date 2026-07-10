import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { IPost } from '../interfaces/IPost';
import { ToastService } from '../../../service/toast.service';
import { tap, catchError, of, finalize } from 'rxjs';
import { LoaderService } from '../../../service/loader.service';
import { IPostCreate } from '../interfaces/IPostCreate';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

  private fb: FormBuilder = inject(FormBuilder);
  private postService: PostService = inject(PostService);
  private toastService: ToastService = inject(ToastService);
  private loaderService: LoaderService = inject(LoaderService);
  private router: Router = inject(Router);

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    tags: ['', Validators.required],
    author: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loaderService.showLoader();
    const newPost: IPostCreate = {
      ...this.form.value,
      tags: this.form.value.tags!.split(',').map((t: string) => t.trim()),
    };

    this.postService.createPost(newPost)
      .pipe(
        tap(() => {
          this.toastService.showSuccess('Пост успешно создан');
          this.router.navigate(['/posts']);
        }),
        catchError(() => {
          this.toastService.showError('Не удалось создать пост');
          return of();
        }),
      ).
      subscribe();
  }

}