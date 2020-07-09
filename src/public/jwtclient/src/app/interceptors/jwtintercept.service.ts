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
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../auth/auth.service';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // if is not authorized then clean the cache
    // else if loggeid

    let token = sessionStorage.getItem('token');

    const cloned = request.clone({
      headers: request.headers.set("Authorization",
        "Bearer " + token)
    });

    return next.handle(cloned)
      .pipe(
        tap(evt => { }),
        catchError(error => {
          console.log(`Error message : ${error.message}`);
          if (error.status === 401) {
            this.auth.logout();
          }
          return of(error);
        }))


  }

}