import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private router?: Router) {
  }

  wrapperObservable(operador: Observable<any>): any {
    return operador.pipe(
      map(
        data => {
          return this.Validation(data);
        },
        err => {
          console.log(err);
        }
      ));
  }

  Validation(response: any): any {
    if (response.state === 400) {
      console.log(response.message);
    } else if (response.state === 401) {
      this.close();
    } else {
      if (response.body === 'true' || response.message) {
        console.log(response.message);
      }
      return response.body;
    }
  }

  private close() {
    localStorage.removeItem('current_u');
    localStorage.removeItem('current_p');
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
