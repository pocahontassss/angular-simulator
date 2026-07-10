import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, timeout } from 'rxjs';
import { IPost } from './interfaces/IPost';
import { IPostResponse } from './interfaces/IPostResponse';
import { IPostUpdate } from './interfaces/IPostUpdate';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  private readonly baseUrl: "https://dummyjson.com/posts" = 'https://dummyjson.com/posts';
  private httpClient: HttpClient = inject(HttpClient);

  getPosts(limit: number, skip: number): Observable<IPostResponse> {
    return this.httpClient.get<IPostResponse>(`${ this.baseUrl }?limit=${ limit }&skip=${ skip }`)
  }

  getPost(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${ this.baseUrl }/${ id }`);
  }

  createPost(post: Partial<IPost>): Observable<IPost> {
    return this.httpClient.post<IPost>(`${ this.baseUrl }/add`, post);
  }

  updatePost(data: IPostUpdate): Observable<IPost> {
    return this.httpClient.put<IPost>(`${ this.baseUrl }/${ data.id }`, data);
  }

  deletePost(id: number): Observable<IPost> {
    return this.httpClient.delete<IPost>(`${ this.baseUrl }/${ id }`);
  }

}