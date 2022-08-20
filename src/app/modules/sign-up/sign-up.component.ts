import { SignupService } from './../../shared/services/signup/signup.service';
import { User } from '../../shared/utilities/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;
  badCredentials: boolean = false;

  constructor(private router: Router, private _signupService: SignupService) {}

  ngOnInit(): void {
    //responsive form
    this.signUpForm = new FormGroup({
      userName: new FormControl('', Validators.required),
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
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  signUp() {
    let userDetails: User = {
      id: 1,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      name: this.signUpForm.value.userName,
      phoneNumber: this.signUpForm.value.phoneNumber,
      address: this.signUpForm.value.address,
    };

    //post request
    this._signupService.signup(userDetails).subscribe(
      (response) => {
        console.log(response), (this._signupService.userData = userDetails);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.badCredentials = true;
      }
    );
  }
}
