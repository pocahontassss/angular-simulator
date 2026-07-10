import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IPost } from '../interfaces/IPost';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ToastService } from '../../../service/toast.service';
import { catchError, of, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoaderService } from '../../../service/loader.service';
import { IPostUpdate } from '../interfaces/IPostUpdate';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './post-edit-dialog.component.html'
})
export class PostEditDialogComponent implements OnInit {

  private config: DynamicDialogConfig = inject(DynamicDialogConfig);
  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private fb: FormBuilder = inject(FormBuilder);
  private messageService: ToastService = inject(ToastService);
  private postService: PostService = inject(PostService);
  loaderService: LoaderService = inject(LoaderService);

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    tags: [''],
    views: [0, Validators.min(0)]
  });

  ngOnInit(): void {
    const post: IPost = this.config.data as IPost;

    this.form.patchValue({
      title: post.title,
      tags: post.tags.join(', '),
      views: post.views ?? 0
    });
  }

  close(): void {
    this.ref.close();
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    
    const post: IPost = this.config.data as IPost;
    const id: number = post.id;
    const title: string = this.form.value.title!;
    const tagsRaw: string = this.form.value.tags as string;
    const views: number = this.form.value.views ?? 0;

    const postUpdate: IPostUpdate = {
      id,
      title,
      tags: (tagsRaw || '').split(',').map(t => t.trim()).filter(Boolean),
      views: views ?? 0,
    };

    this.postService.updatePost(postUpdate)
      .pipe(
        tap(() => this.messageService.showSuccess('Пост успешно обновлён')),
        tap(() => this.ref.close()),
        catchError(() => {
          this.messageService.showError('Не удалось обновить пост');
          return of();
        })
      ).subscribe();
  }

}