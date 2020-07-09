import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/auth.service';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // if is not authorized then clean the cache
    // else if loggeid

    let token = sessionStorage.getItem('token');

    let clone = request.clone();

    clone.headers.append('Authorization', token);

    return next.handle(clone)
    .pipe(
      tap(evt => {}),
      catchError(error => {
        if (error.status === 401) {
          sessionStorage.removeItem('token');
        }
        return of(error);
      }))


  }

}