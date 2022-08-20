import { LoginService } from 'src/app/shared/services/login/login.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if(this._loginService.isLogged) {
      return true;
    } 
    else {
      alert("Sorry, you are not logged in!.. Log in to access this page")
      return false;
    }
  }
}
