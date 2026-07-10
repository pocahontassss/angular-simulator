import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, finalize, map, Observable, of, ReplaySubject, switchMap, tap, throwError } from 'rxjs';
import { PostApiService } from './post-api.service';
import { IPost } from './interfaces/IPost';
import { ToastService } from '../../service/toast.service';
import { LoaderService } from '../../service/loader.service';
import { IPostResponse } from './interfaces/IPostResponse';
import { IPostUpdate } from './interfaces/IPostUpdate';
import { IPostCreate } from './interfaces/IPostCreate';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private postApi: PostApiService = inject(PostApiService);
  private toastService: ToastService = inject(ToastService);
  private loaderService: LoaderService = inject(LoaderService);
  postsSubject: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  posts$: Observable<IPost[]> = this.postsSubject.asObservable();
  totalRecords: number = 0;

  loadPosts(limit: number, skip: number): Observable<IPostResponse> {
    this.loaderService.showLoader();
    return this.postApi.getPosts(limit, skip)
      .pipe(
        tap((response: IPostResponse) => {
          this.postsSubject.next(response.posts);
          this.totalRecords = response.total;
        }),
        finalize(() => this.loaderService.hideLoader()),
        catchError(() => {
          this.toastService.showError('Не удалось загрузить посты');
          return of();
        })
      );
  }

  deletePost(id: number): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApi.deletePost(id)
      .pipe(
        tap((deletedPost: IPost) => {
          const posts: IPost[] = this.postsSubject.getValue();
          const updatedPosts: IPost[] = posts.filter((p: IPost) => p.id !== id);
          this.postsSubject.next(updatedPosts);
          this.totalRecords = Math.max(0, this.totalRecords - 1);
        }),
        finalize(() => this.loaderService.hideLoader()),
      );
  }

  createPost(newPost: IPostCreate): Observable<IPost> {
    this.loaderService.showLoader();
    return this.postApi.createPost(newPost)
      .pipe(
        finalize(() => this.loaderService.hideLoader())
      )
  }

  updatePost(updatedPost: IPostUpdate): Observable<IPost> {
    return this.postApi.updatePost(updatedPost)
    .pipe(
        finalize(() => this.loaderService.hideLoader()),
        catchError(() => {
        this.toastService.showError('Не удалось обновить пост');
        return of();
      }),
    )
  }

}
