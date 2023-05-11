import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  adminJWT = localStorage.getItem('adminToken');
  userJwT = localStorage.getItem('token');

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let jwt;
    if (this.isAdmin()) {
      jwt = this.adminJWT
    } else {
      jwt = this.userJwT
    }

    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      });
    }

    return next.handle(request);
  }

  private isAdmin() {
    return window.location.href.indexOf('admin') !== -1;
  }
}
