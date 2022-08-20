import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/shared/utilities/auth';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  badCredentials: boolean = false;

  constructor(private _loginService: LoginService, private router: Router) {}

  islogged: boolean = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });

    this.islogged = this._loginService.isLogged;
  }

  login() {
    let userDetails = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    //post request
    this._loginService.login(userDetails).subscribe(
      (response: AuthResponse) => {
        console.log(response),
          localStorage.setItem('token', response.token),
          (this.islogged = this._loginService.isLogged),
          this.router.navigate(['categories']);
      },
      (error) => {
        console.log(error);
        this.badCredentials = true;
        this._loginService.isLogged = false;
      }
    );
  }
}
