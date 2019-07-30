import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  public lastModule: string;

  constructor(private _login: LoginService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._login.isAuthenticated()) {
      return true;
    } else {
      this._login.closeSession(true);
    }
  
}

  private isPageRefresh(): boolean {
    return( ! this._router.navigated );
  }

}
