import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from './services/rest.service';

@Injectable()
export class MyInterceptoprInterceptor implements HttpInterceptor {

  constructor(private service: RestService) { }
    
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor working');
        let authReq = httpRequest
        const token = window.localStorage.getItem('token');


        if (token != null) {
             authReq = authReq.clone({ setHeaders: {'Authorization': `Bearer ${token}` } })
        }
        return next.handle(authReq);
    }
}
export const authInterceptorProvider = [
  {
      provide: HTTP_INTERCEPTORS, useClass: MyInterceptoprInterceptor, multi: true
  }
]