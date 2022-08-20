import { LogoutService } from './../../shared/services/logout/logout.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public _loginService: LoginService,
    public _logoutService: LogoutService
  ) {}

  islogged: boolean = false;

  ngOnInit(): void {
    this.islogged = this._loginService.isLogged;
  }

  logout() {
    this._logoutService.logout();
    this.islogged = this._loginService.isLogged;
  }
}
