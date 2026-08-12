import { inject, Injectable } from '@angular/core';
import { IPostsResponse } from './IPostResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {

  private http: HttpClient = inject(HttpClient);

  private apiUrl: string = 'https://dummyjson.com/posts';

  getPosts(page: number, pageSize: number): Observable<IPostsResponse> {
    const skip: number = (page - 1) * pageSize;
    return this.http.get<IPostsResponse>(this.apiUrl, {
      params: {
        skip: skip.toString(),
        limit: pageSize.toString(),
      },
    });
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${ this.apiUrl }/${ id }`);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${ this.apiUrl }/add`, post);
  }

  updatePost(id: number, post: Partial<IPost>): Observable<IPost> {
    return this.http.put<IPost>(`${ this.apiUrl }/${ id }`, post);
  }

  deletePost(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${ this.apiUrl }/${ id }`);
  }

}
