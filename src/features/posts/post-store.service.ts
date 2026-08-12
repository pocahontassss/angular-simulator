import { BehaviorSubject, Observable, tap, finalize, throwError, catchError } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../classes/message.service';
import { IPostsResponse } from './IPostResponse';
import { PostApiService } from './post-api.service';
import { LoaderService } from '../../classes/loader.service';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root',
})
export class PostStateService {

  private postApiService: PostApiService = inject(PostApiService);
  private messageService: MessageService = inject(MessageService);
  private loaderService: LoaderService = inject(LoaderService);

  private postsSubject: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  posts$: Observable<IPost[]> = this.postsSubject.asObservable();

  loadPosts(page: number, pageSize: number): Observable<IPostsResponse> {
    this.loaderService.showLoader();
    return this.postApiService.getPosts(page, pageSize)
    .pipe(
      tap((response: IPostsResponse) => this.postsSubject.next(response.posts)),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось загрузить список постов.');
        return throwError(() => error);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }

  loadPostById(id: number): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApiService.getPostById(id)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось загрузить пост.');
        return throwError(() => error);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }

  createPost(post: IPost): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApiService.createPost(post)
    .pipe(
      tap((createdPost: IPost) => this.postsSubject.next([...this.postsSubject.getValue(), createdPost])),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось добавить пост.');
        return throwError(() => error);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }

  updatePost(id: number, post: Partial<IPost>): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApiService.updatePost(id, post)
    .pipe(
      tap((updatedPost: IPost) => { const updatedPosts: IPost[] = this.postsSubject.getValue()
        .map((p: IPost) => p.id === updatedPost.id ? { ...p, ...updatedPost } : p);
        this.postsSubject.next(updatedPosts);
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось обновить пост.');
        return throwError(() => error);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }

  deletePost(id: number): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApiService.deletePost(id)
    .pipe(
      tap(() => this.postsSubject.next(this.postsSubject.getValue().filter((p: IPost) => p.id !== id))),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось удалить пост.');
        return throwError(() => error);
      }),
      finalize(() => this.loaderService.hideLoader())
    );
  }

}
