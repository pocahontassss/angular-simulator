import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn, Router } from '@angular/router';
import { PostApiService } from './post-api.service';
import { IPost } from './interfaces/IPost';
import { catchError, of, Observable, finalize } from 'rxjs';
import { LoaderService } from '../../service/loader.service';

export const postResolver: ResolveFn<IPost | null> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const api: PostApiService = inject(PostApiService);
  const router: Router = inject(Router);
  const loaderService = inject(LoaderService);
  const idParam: string | null = route.paramMap.get('id');
  const id: number | null = idParam ? Number(idParam) : null;

  if (!id) {
    router.navigate(['/posts']);
    return of(null);
  }
  
  loaderService.showLoader();
  return api.getPost(id)
  .pipe(
    finalize(() => loaderService.hideLoader()),
    catchError(() => {
      return of(null);
    }),
  );

};