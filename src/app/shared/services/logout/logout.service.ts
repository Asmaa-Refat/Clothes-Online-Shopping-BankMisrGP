import { LoginService } from 'src/app/shared/services/login/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private _loginService: LoginService) {}

  logout() {
    this._loginService.isLogged = false;
  }
}
