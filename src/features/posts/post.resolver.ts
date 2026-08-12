import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { PostApiService } from './post-api.service';
import { Observable } from 'rxjs';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<IPost> {

  private postApiService: PostApiService = inject(PostApiService);

  resolve(route: ActivatedRouteSnapshot): Observable<IPost> {
    const id: string | null = route.paramMap.get('id');
    return this.postApiService.getPostById(+id!);
  }

}
