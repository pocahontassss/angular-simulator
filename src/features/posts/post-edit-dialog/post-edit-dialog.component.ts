import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IPost } from '../IPost';


@Component({
  selector: 'app-post-edit-dialog',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, InputNumberModule],
  templateUrl: './post-edit-dialog.component.html',
  styleUrl: './post-edit-dialog.component.scss',
})
export class PostEditDialogComponent {

  private dialogConfig: DynamicDialogConfig = inject(DynamicDialogConfig);
  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private fb: FormBuilder = inject(FormBuilder);

  post!: IPost;

  editForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    tags: ['', Validators.required],
    views: [0, [Validators.required, Validators.min(0)]],
  });

  constructor() {
    this.initPost();
  }

  initPost(): void {
    this.post = this.dialogConfig.data;
    const tagsString: string = Array.isArray(this.post.tags)
      ? this.post.tags.join(', ')
      : String(this.post.tags);

    this.editForm.patchValue({
      title: this.post.title,
      tags: tagsString,
      views: this.post.views
    });
  }

  onSave(): void {
    if (this.editForm.valid) {
      const tagsArray: string[] = this.editForm.value.tags
        .split(',')
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag.length > 0);
      const updatedPost: IPost = {
        ...this.post,
        title: this.editForm.value.title,
        tags: tagsArray,
        views: this.editForm.value.views
      };
      this.ref.close(updatedPost);
    }
  }

  onCancel(): void {
    this.ref.close();
  }

}
