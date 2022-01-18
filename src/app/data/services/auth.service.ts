import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(credentials: any): Observable<any> {
    return of('OK')

  }

}
