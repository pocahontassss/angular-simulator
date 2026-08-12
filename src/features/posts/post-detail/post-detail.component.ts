import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContextMenuModule } from 'primeng/contextmenu';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { MessageService } from '../../../classes/message.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { IPost } from '../IPost';

@Component({
  selector: 'app-post-detail',
  imports: [
    CommonModule,
    TableModule,
    SkeletonModule,
    ContextMenuModule,
    PaginatorModule,
    ButtonModule,
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {

  private messageService: MessageService = inject(MessageService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  isLoading: boolean = true;
  post?: IPost;

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(): void {
    this.route.data
      .pipe(
        tap((data: Data) => {
          this.post = data['post'];
          this.isLoading = false;
        }),
        catchError((error: HttpErrorResponse) => {
          this.isLoading = false;
          this.post = undefined;
          this.messageService.showError('Ошибка загрузки');
          return throwError(() => error);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }

}
