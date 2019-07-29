import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/Login';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  private loginUrl: string = 'login';

  constructor(
    public http: HttpClient,
    private router: Router,
    private _validateService: ValidationService
    ) {
    super(http, 'session');
  }

  login(user: ILogin): Observable<any> {
    return this._validateService.wrapperObservable(this.save(this.loginUrl, user));
  }

  logout() {
    this.closeSession(true);
  }

  setSession(authResult, user: ILogin): void {
    const encrypt_token = this.Encrypt.encrypted(authResult);
    localStorage.setItem('current_p', this.Encrypt.encrypted(user.password));
    localStorage.setItem('current_u', this.Encrypt.encrypted(user.username));
    // const expiresAt = this.Encrypt.encrypted(authResult.expires_at.toString());
    localStorage.setItem('access_token', encrypt_token);
    // localStorage.setItem('expires_at', expiresAt);
  }

  public closeSession(flat: boolean = false): void {
    if (!flat) {
      sessionStorage.removeItem('useranterior');
    }
    const userStorage = this.Encrypt.decrypted(localStorage.getItem('current_u'));

    if (userStorage != null) {
      localStorage.removeItem('current_u');
      localStorage.removeItem('current_p');
      localStorage.removeItem('access_token');
      sessionStorage.removeItem('breadcrumbs');
      this.router.navigate(['/login']);
    } else {
      sessionStorage.removeItem('breadcrumbs');
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    }
  }

  public isAuthenticated(): boolean {
    const expiresAt = this.Encrypt.decrypted(localStorage.getItem('expires_at'));
    const access_token = this.Encrypt.decrypted(localStorage.getItem('access_token'));
    if (access_token == null) {
      return false;
    } else if (access_token) {
      return true;
    } else {
      const fechaExpiracion = new Date().getTime() < new Date(expiresAt).getTime();
      return fechaExpiracion;
    }
  }
}
